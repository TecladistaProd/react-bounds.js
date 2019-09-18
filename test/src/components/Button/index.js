import React, { useState, useCallback } from "react";

import style from "./style.sass";

function Button(props) {
  const [st, setSt] = useState({ "--pos": "0% 0%" });
  const [cl, setCl] = useState(style.button);

  const handleMouseMove = useCallback(e => {
    let { width, height } = e.target.getBoundingClientRect();
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    setSt({ "--pos": `${(x / width) * 100}% ${(y / height) * 100}%` });
  });

  const handleMouseDown = useCallback(e => {
    setCl(style.button + " " + style.active);
    if (props.onClick) return props.onClick(e);
  });
  const handleTransition = useCallback(e => {
    setTimeout(() => {
      setCl(style.button);
    }, 300);
  });

  if (props.type === "link") {
    return (
      <a
        className={cl}
        style={st}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTransitionEnd={handleTransition}
        href={props.url}
        target="_blank"
      >
        {props.children}
      </a>
    );
  }
  return (
    <button
      className={cl}
      style={st}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTransitionEnd={handleTransition}
    >
      {props.children}
    </button>
  );
}

export default Button;
