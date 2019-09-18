import React from "react";

import style from "./style.sass";

function Code(props) {
  return (
    <div className={style.code}>
      <pre>{props.children}</pre>
    </div>
  );
}

export const Vb = props => <span className={style.var}>{props.children}</span>;
export const Mt = props => (
  <span className={style.method}>{props.children}</span>
);
export const Sr = props => (
  <span className={style.string}>'{props.children}'</span>
);
export const Nb = props => (
  <span className={style.number}>{props.children}</span>
);
export const Ct = props => (
  <span className={style.comment}>/* {props.children} */</span>
);
export const Tb = props => (
  <span style={{ "--space": props.space || 1 }} className={style.tab}></span>
);

export const Rw = props => <code>{props.children}</code>;

export const Cd = props => (
  <span className={style.command}>{props.children}</span>
);

export default Code;
