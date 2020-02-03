import * as React from 'react'

import BoundElement from './BoundElement'

import { boundaryParam } from '../interfaces'

import boundElementFnIn from '../interfaces/boundElementFunctionInterface'

interface props {
  onEnter?: (el?: React.ReactHTMLElement<HTMLElement>, ratio?: number) => void,
  onLeave?: (el?: React.ReactHTMLElement<HTMLElement>, ratio?: number) => void
}

function boundElement(el: string): boundElementFnIn {
  return function(options: boundaryParam = {}) {
    let Element = React.forwardRef((pps: props, r) =>
      React.createElement(el, { ...pps, ref: r })
    );

    return React.forwardRef<any, props>((props: props, ref: any) => {
      let nProps = { ...props, innerRef: ref };

      return <BoundElement options={options} {...nProps} Component={Element} />;
    });
  };
}

export default boundElement;
