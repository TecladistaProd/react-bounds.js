//@ts-nocheck
import { getMargins, noOp, checkForObserver } from "./helpers";

import { boundaryParam, boundaryNode } from "../interfaces";

class Boundary {
  nodes: Array<boundaryNode>;
  onEmit: Function;
  observer: IntersectionObserver;
  constructor(params: boundaryParam = {}) {
    let { root, margins, threshold, onEmit } = params;

    onEmit = onEmit || noOp;

    checkForObserver();

    const rootMargin = getMargins(margins || {});
    threshold = threshold || 0.0;

    const options = {
      root,
      rootMargin,
      threshold
    };

    this.nodes = [];
    this.onEmit = onEmit;
    this.observer = new IntersectionObserver(this._emit.bind(this), options);
  }

  // API
  watch(el, onEnter = noOp, onLeave = noOp) {
    const data = {
      el,
      onEnter,
      onLeave
    };

    this.nodes.push(data);
    this.observer.observe(el);

    return data;
  }

  unWatch(el) {
    const index = this._findByNode(el, true);

    if (index !== -1) {
      this.nodes.splice(index, 1);
      this.observer.unobserve(el);
    }

    return this;
  }

  check(el) {
    const data = this._findByNode(el) || {};
    return data.history;
  }

  clear() {
    this.nodes = [];
    this.observer.disconnect();

    return this;
  }

  static checkCompatibility() {
    checkForObserver();
  }

  // HELPERS
  _emit(events) {
    const actions = events.map(event => {
      const data = this._findByNode(event.target);
      const ratio = event.intersectionRatio;

      data.history = event.isIntersecting;

      event.isIntersecting ? data.onEnter(ratio) : data.onLeave(ratio);

      return {
        el: event.target,
        inside: event.isIntersecting,
        outside: !event.isIntersecting,
        ratio: event.intersectionRatio
      };
    });

    this.onEmit(actions);
  }

  _findByNode(el, returnIndex = false) {
    const func = returnIndex ? "findIndex" : "find";

    return this.nodes[func](node => {
      return node.el.isEqualNode(el);
    });
  }
}

export default Boundary;
