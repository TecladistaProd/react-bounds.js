import { boundaryParam } from './'
import { ReactComponentElement, ReactHTML, ReactElement } from 'react'

interface props {
  onEnter?: (el?: React.ReactHTMLElement<HTMLElement>, ratio?: number) => void,
  onLeave?: (el?: React.ReactHTMLElement<HTMLElement>, ratio?: number) => void
}

interface boundElementFunction {
  (option?: boundaryParam): React.ForwardRefExoticComponent<React.RefAttributes<ReactComponentElement<any, props>>>
}

export default boundElementFunction