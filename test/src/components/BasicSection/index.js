import React, { useState, useCallback, useEffect, createRef } from "react";

import style from "./style.sass";

import bound from "../../../../src/index";

import Code, { Rw, Tb, Vb, Mt, Sr, Cd, Nb, Ct } from "../Code";

function BasicSection() {
  const [Circle, setCircle] = useState(null);
  const [circleCl, setCircleCl] = useState(style.circle);
  const [circleS, setCircleS] = useState({ backgroundColor: "lightgray" });
  let boxRef = createRef();

  useEffect(() => {
    if (boxRef.current && !Circle) {
      setCircle(bound.div({ root: boxRef.current }));
      setTimeout(() => handleCircleClass(), 1000);
    }
  });

  const handleCircleClass = useCallback(() => {
    if (circleCl === style.circle) setCircleCl(`${style.circle} ${style.move}`);
    else setCircleCl(style.circle);
  });

  const handleCircle = useCallback((el, ratio) => {
    if (ratio) setCircleS({ backgroundColor: "#ffae00" });
    else setCircleS({ backgroundColor: "lightgray" });
  });

  return (
    <section className={style.basic}>
      <h2 className={style.title}>Basic Detection</h2>
      <div ref={boxRef} className={style.box}>
        {Circle && (
          <Circle
            style={circleS}
            onEnter={handleCircle}
            onLeave={handleCircle}
            onTransitionEnd={handleCircleClass}
            className={circleCl}
          />
        )}
      </div>
      <p>
        <i>Functional Component</i>
      </p>
      <Code>
        <Rw>
          <Cd>import</Cd> bound <Cd>from</Cd> <Sr>react-bounds.js</Sr>
        </Rw>
        <br />
        <Rw>
          <Cd>function</Cd> <Mt>MyComp</Mt>(){"{"}
        </Rw>
        <Rw>
          <Tb />
          <Vb>const</Vb> [Circle, setCircle] = <Mt>useState</Mt>(<Nb>null</Nb>);
        </Rw>
        <Rw>
          <Tb />
          <Vb>const</Vb> [circleCl, setCircleCl] = <Mt>useState</Mt>(
          <Sr>circle</Sr>);
        </Rw>
        <Rw>
          <Tb />
          <Vb>const</Vb> [circleS, setCircleS] = <Mt>useState</Mt>({"{"}{" "}
          backgroundColor: <Sr>lightgray</Sr> });
        </Rw>
        <Rw>
          <Tb />
          <Vb>let</Vb> boxRef = <Mt>createRef</Mt>();
        </Rw>
        <br />
        <Rw>
          <Tb />
          <Mt>useEffect</Mt>(() => {"{"}
        </Rw>
        <Rw>
          <Tb space={2} />
          <Cd>if</Cd> (boxRef.current <Cd>{"&&"}</Cd> !Circle)
        </Rw>
        <Rw>
          <Tb space={3} />
          <Mt>setCircle</Mt>(bound.div({"{"} root: boxRef.current }));
        </Rw>
        <Rw>
          <Tb space={3} />
          <Ct>
            bound.htmlElement, will return an html element with 2 additional
            events, onEnter and onLeave
          </Ct>
        </Rw>
        <Rw>
          <Tb space={3} />
          <Mt>setTimeout</Mt>(() => <Mt>handleCircleClass()</Mt>, <Nb>1000</Nb>
          );
        </Rw>
        <Rw>
          <Tb space={2} />}
        </Rw>
        <Rw>
          <Tb />
          });
        </Rw>
        <br />
        <Rw>
          <Tb />
          <Vb>const</Vb> handleCircleClass = <Mt>useCallback</Mt>(() => {"{"}
        </Rw>
        <Rw>
          <Tb space={2} />
          <Cd>if</Cd> (circleCl === <Sr>circle</Sr>) setCircleCl(
          <Sr>circle move</Sr>
          );
        </Rw>
        <Rw>
          <Tb space={2} />
          <Cd>else</Cd> <Mt>setCircleCl</Mt>(<Sr>circle</Sr>);
        </Rw>
        <Rw>
          <Tb />}
        </Rw>
        <Rw>
          <Tb />
          <Cd>const</Cd> handleCircle = <Mt>useCallback</Mt>((el, ratio) =>{" "}
          {"{"}
        </Rw>
        <Rw>
          <Tb space={2} />
          <Ct>
            onEnter and onLeave will return the element and ratio(0-1) like
            param, onLeave will return 0 and onEnter something > 0
          </Ct>
        </Rw>
        <Rw>
          <Tb space={2} />
          <Cd>if</Cd> (ratio) <Mt>setCircleS</Mt>({"{"} backgroundColor:{" "}
          <Sr>#ffae00</Sr> });
        </Rw>
        <Rw>
          <Tb space={2} />
          <Cd>else</Cd> <Mt>setCircleS</Mt>({"{"} backgroundColor:{" "}
          <Sr>lightgray</Sr> });
        </Rw>
        <Rw>
          <Tb />}
        </Rw>
        <br />
        <br />
        <Rw>
          <Tb />
          <Cd>return</Cd> (
        </Rw>
        <Rw>
          <Tb space={2} />
          {"<"}
          <Cd>div</Cd> className="box" ref={"{"}boxRef}>
        </Rw>
        <Rw>
          <Tb space={3} />
          {"{"} Circle {"&& <"}
          <Nb>Circle</Nb>
        </Rw>
        <Rw>
          <Tb space={4} />
          className={"{"}circleCl}
        </Rw>
        <Rw>
          <Tb space={4} />
          style={"{"}circleS}
        </Rw>
        <Rw>
          <Tb space={4} />
          onEnter={"{"}handleCircle}
        </Rw>
        <Rw>
          <Tb space={4} />
          onLeave={"{"}handleCircle}
        </Rw>
        <Rw>
          <Tb space={4} />
          onTransitionEnd={"{"}handleCircleClass}
        </Rw>
        <Rw>
          <Tb space={3} />
          />}
        </Rw>
        <Rw>
          <Tb space={2} />
          {"<"}/<Cd>div</Cd>>
        </Rw>
        <Rw>
          <Tb />)
        </Rw>
        <Rw>{"}"}</Rw>
      </Code>
    </section>
  );
}

export default BasicSection;
