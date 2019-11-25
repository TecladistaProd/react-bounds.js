import React from "react";

import style from "./style.sass";

import Button from "../Button";

const Header = () => (
  <header className={style.header}>
    <h1 className={style.title}>
      React-Bounds<span>.js</span>
    </h1>
    <Button type="link" url="https://github.com/tecladistaprod/react-bounds.js">
      Documentation
    </Button>
  </header>
);

export default Header;
