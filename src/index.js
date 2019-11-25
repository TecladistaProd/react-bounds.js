import React, { createElement, PureComponent } from "react";

import domElements from "./domElements";

import Boundary from "./bound";

const boundaryEls = {};

domElements.forEach(el => {
  boundaryEls[el] = boundElement(el);
});

function boundElement(el) {
  return function(options = {}) {
    let Element = React.forwardRef((pps, r) =>
      createElement(el, { ...pps, ref: r })
    );

    class BoundElement extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          bound: null
        };
        this.refEl = null;
      }
      componentDidMount() {
        options = options || {};

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
        delete nP.onEnter;
        delete nP.onLeave;
        delete nP.innerRef;

        return (
          <Element
            {...nP}
            ref={el => {
              this.refEl = el;
              if (this.props.innerRef) return this.props.innerRef(el);
              else return null;
            }}
          />
        );
      }
    }

    return React.forwardRef((props, ref) => {
      let nProps = { ...props, innerRef: ref };

      return <BoundElement {...nProps} />;
    });
  };
}

export default boundaryEls;
