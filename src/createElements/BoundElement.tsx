import * as React from 'react'

import Boundary from "../bound";

import { boundaryParam } from '../interfaces'

interface state {
  bound: null|Boundary
}

interface props {
  options?: boundaryParam,
  onEnter?: Function,
  onLeave?: Function,
  innerRef?: Function,
  Component?: React.ForwardRefExoticComponent<{}>
}

class BoundElement extends React.Component<props, state> {
  refEl: null|React.ReactHTMLElement<HTMLElement>;

  constructor(props: props) {
    super(props);

    this.state = {
      bound: null
    };
    this.refEl = null;
  }
  componentDidMount() {
    const options = this.props.options || {};
    if (this.refEl) {
      let { onEnter, onLeave } = this.props;
      let bound = new Boundary(options);

      let fn = () => {};

      onEnter = onEnter || fn;
      onLeave = onLeave || fn;

      bound.watch(
        this.refEl,
        onEnter.bind(null, this.refEl),
        onLeave.bind(null, this.refEl)
      );

      this.setState({
        bound
      });
    }
  }

  componentWillUnmount() {
    if (this.state.bound) this.state.bound.clear();

    this.setState({ bound: null });
  }

  render() { 
    let nP = { ...this.props };
    let { Component: Element } = this.props;
    delete nP.Component;
    delete nP.onEnter;
    delete nP.onLeave;
    delete nP.innerRef;
    
    return (
      // @ts-ignore
      <Element
        {...nP}
        ref={(el: React.ReactHTMLElement<HTMLElement>) => {
          this.refEl = el;
          if (this.props.innerRef) return this.props.innerRef(el);
          else return null;
        }}
      />
    );
  }
}

export default BoundElement