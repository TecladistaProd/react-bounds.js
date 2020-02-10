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
      <div className={style.donateForm}>
        <p>
          You can help to maintain this project doing a donate here.
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="HHWEKX97SKYAQ" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <BasicSection />
      <ScrollAnimation />
      <h3>MIT. © 2019 Vitor Cruz</h3>
    </div>
  );
}

export default App;
