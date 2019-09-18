import React from "react";

import style from "./sass/App.sass";

import Header from "./components/Header";
import BasicSection from "./components/BasicSection";
import ScrollAnimation from "./components/ScrollAnimation";

function App() {
  return (
    <div className={style.content}>
      <Header />
      <p className={style.info}>
        Asynchronous boundary detection, with IntersectionObserver API for
        ReactJS.
        <span>
          Based on Bounds.js by <i>Christopher Cavalea</i>
        </span>
      </p>
      <BasicSection />
      <ScrollAnimation />
      <h3>MIT. © 2019 Vitor Cruz</h3>
    </div>
  );
}

export default App;
