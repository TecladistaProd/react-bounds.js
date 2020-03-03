import { boundaryParam } from "./";
import { ReactComponentElement, ReactHTMLElement } from "react";

interface props {
  onEnter?: (el?: ReactHTMLElement<HTMLElement>, ratio?: number) => void;
  onLeave?: (el?: ReactHTMLElement<HTMLElement>, ratio?: number) => void;
}

interface boundElementFunction<t extends any & (HTMLElement | SVGElement)> {
  (option?: boundaryParam): React.ForwardRefExoticComponent<
    React.RefAttributes<ReactComponentElement<t, props>>
  >;
}

export default boundElementFunction;
