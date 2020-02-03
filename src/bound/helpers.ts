import { margins } from '../interfaces'

export const checkForObserver = () => {
  if (!("IntersectionObserver" in window)) {
    throw new Error(`
      bounds.js requires IntersectionObserver on the global object.
      IntersectionObserver is unavailable in IE and other older
      versions of browsers.
      See https://github.com/ChrisCavs/bounds.js/blob/master/README.md
      for more compatibility information.
    `);
  }
};

export const getMargins = (margins: margins) => {
  margins = margins || {};
  const { top = 0, right = 0, bottom = 0, left = 0 } = margins;
  return `${top}px ${right}px ${bottom}px ${left}px`;
};

export const noOp = () => {};