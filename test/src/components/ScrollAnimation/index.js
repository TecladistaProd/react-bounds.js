import React, { Component } from "react";

import style from "./style.sass";

import Code, { Rw, Tb, Cd, Ct, Sr, Nb, Mt, Vb } from "../Code";

// import bound from "../../../../src/index";
import bound from "../../../../dist/index";

let images = [
  "https://images.unsplash.com/photo-1566167433854-d7defb74783f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600",
  "https://images.unsplash.com/photo-1566333449960-efcdbd3363a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600",
  "https://images.unsplash.com/photo-1567983441580-85abdf6c144d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600",
  "https://images.unsplash.com/photo-1568659672931-c98d3639a4b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600",
  "https://images.unsplash.com/photo-1568518998525-e034a128897d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600"
];

let Image = bound.img({ margins: { top: 75 }, threshold: [0.1, 0.35] });

class ScrollAnimation extends Component {
  state = {
    imagesSrc: new Array(5).fill(""),
    imagesStyle: new Array(5).fill({})
  };

  handleImageEnter = (el, ratio) => {
    let { imagesSrc } = this.state;
    if (!imagesSrc[parseInt(el.dataset.key)]) {
      imagesSrc[parseInt(el.dataset.key)] = el.dataset.src;
      this.setState({ imagesSrc });
    }
    if (ratio > 0.3) {
      let { imagesStyle } = this.state;
      imagesStyle[parseInt(el.dataset.key)] = { filter: "blur(0px)" };
      this.setState({ imagesStyle });
    }
  };

  render() {
    return (
      <section className={style.basic}>
        <h2 className={style.title}>
          Scroll Animation <i>(Lazy-Loading Images onScroll)</i>
        </h2>
        {images.map((i, k) => (
          <Image
            className={style.img}
            data-src={i}
            src={this.state.imagesSrc[k]}
            style={this.state.imagesStyle[k]}
            key={k}
            data-key={k}
            onEnter={this.handleImageEnter}
          />
        ))}
        <p>
          <i>Class Component</i>
        </p>
        <Code>
          <Rw>
            <Cd>import</Cd> bound <Cd>from</Cd> <Sr>react-bounds.js</Sr>
          </Rw>
          <Rw>
            <Cd>let</Cd> images = [
          </Rw>
          <Rw>
            <Tb />
            <Sr>
              https://images.unsplash.com/photo-1566167433854-d7defb74783f?crop=entropy
              {"&"}cs=tinysrgb{"&"}fit=crop{"&"}fm=jpg{"&"}h=400{"&"}
              ixlib=rb-1.2.1{"&"}q=80{"&"}w=600
            </Sr>
            ,
          </Rw>
          <Rw>
            <Tb />
            <Sr>
              https://images.unsplash.com/photo-1566333449960-efcdbd3363a2?crop=entropy
              {"&"}cs=tinysrgb{"&"}fit=crop{"&"}fm=jpg{"&"}h=400{"&"}
              ixlib=rb-1.2.1{"&"}q=80{"&"}w=600
            </Sr>
          </Rw>
          <Rw>]</Rw>
          <Rw>
            <Cd>let</Cd> Image = bound.<Mt>img</Mt>({"{"} margins: {"{"} top:{" "}
            <Nb>75</Nb> }, threshold: [<Nb>0.1</Nb>, <Nb>0.35</Nb>] });
          </Rw>
          <br />
          <Rw>
            <Cd>class</Cd> <Nb>ScrollAnimation</Nb> <Cd>extends</Cd>{" "}
            <Nb>Component</Nb> {"{"}
          </Rw>
          <Rw>
            <Tb />
            state = {"{"}
          </Rw>
          <Rw>
            <Tb space={2} />
            imagesSrc: <Cd>new</Cd> <Mt>Array</Mt>(2).<Mt>fill</Mt>(<Sr />
            ),
          </Rw>
          <Rw>
            <Tb space={2} />
            imagesStyle: <Cd>new</Cd> <Mt>Array</Mt>(2).<Mt>fill</Mt>({"{"}})
          </Rw>
          <Rw>
            {" "}
            <Tb />
            };
          </Rw>
          <br />
          <Rw>
            <Tb />
            <Mt>handleImageEnter</Mt> = (el, ratio) => {"{"}
          </Rw>
          <Rw>
            <Tb space={2} />
            <Cd>let</Cd> {"{"} imagesSrc } = <Nb>this</Nb>.state;
          </Rw>
          <Rw>
            <Tb space={2} />
            <Cd>if</Cd> (<Cd>!</Cd>imagesSrc[
            <Mt children="parseInt" />
            (el.dataset.key)]) {"{"}
          </Rw>
          <Rw>
            <Tb space={3} />
            imagesSrc[
            <Mt children="parseInt" />
            (el.dataset.key)] = el.dataset.src;
          </Rw>
          <Rw>
            <Tb space={3} />
            <Nb>this</Nb>.setState({"{"} imagesSrc });
          </Rw>
          <Rw>
            <Tb space={2} />
            };
          </Rw>

          <Rw>
            <Tb space={2} />
            <Cd>if</Cd> (ratio > <Nb>0.3</Nb>) {"{"}
          </Rw>
          <Rw>
            <Tb space={3} />
            <Cd>let</Cd> {"{"} imagesStyle } = <Nb>this</Nb>.state;
          </Rw>
          <Rw>
            <Tb space={3} />
            imagesStyle[
            <Mt children="parseInt" />
            (el.dataset.key)] = {"{"} filter: <Sr children="blur(0px)" /> };
          </Rw>
          <Rw>
            <Tb space={3} />
            <Nb>this</Nb>.setState({"{"} imagesStyle });
          </Rw>
          <Rw>
            <Tb space={2} />
            };
          </Rw>
          <Rw>
            <Tb />
            };
          </Rw>
          <Rw>
            <Tb />
            <Mt children="render()" /> {"{"}
          </Rw>
          <Rw>
            <Tb space={2} />
            <Cd>return </Cd>(
          </Rw>

          <Rw>
            <Tb space={3} />
            {"<"}
            <Cd>div</Cd>>
          </Rw>
          <Rw>
            <Tb space={4} />
            {"{"}images.
            <Mt children="map" />
            ((i, k) => (
          </Rw>
          <Rw>
            <Tb space={5} />
            {"<"}
            <Cd children="Image" />
          </Rw>
          <Rw>
            <Tb space={6} />
            className="img"
          </Rw>
          <Rw>
            <Tb space={6} />
            data-src={"{"}i}
          </Rw>
          <Rw>
            <Tb space={6} />
            src={"{"}
            <Cd children="this" />
            .state.imagesSrc[k]}
          </Rw>
          <Rw>
            <Tb space={6} />
            style={"{"}
            <Cd children="this" />
            .state.imagesStyle[k]}
          </Rw>
          <Rw>
            <Tb space={6} />
            key={"{"}k}
          </Rw>
          <Rw>
            <Tb space={6} />
            data-key={"{"}k}
          </Rw>
          <Rw>
            <Tb space={6} />
            onEnter={"{"}
            <Nb>this</Nb>.handleImageEnter}
          </Rw>
          <Rw>
            <Tb space={5} />
            />
          </Rw>
          <Rw>
            <Tb space={4} />
            )}
          </Rw>
          <Rw>
            <Tb space={3} />
            {"</"}
            <Cd>div</Cd>>
          </Rw>

          <Rw>
            <Tb space={2} />)
          </Rw>
          <Rw>
            <Tb />
            };
          </Rw>
          <Rw>};</Rw>
        </Code>
      </section>
    );
  }
}

export default ScrollAnimation;
