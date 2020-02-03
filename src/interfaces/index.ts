export interface margins {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface boundaryParam {
  root?: HTMLElement;
  margins?: margins;
  threshold?: Array<number> | number;
  onEmit?: Function;
}

export interface boundaryNode {
  el: HTMLElement;
  onEnter: Function;
  onLeave: Function;
}
