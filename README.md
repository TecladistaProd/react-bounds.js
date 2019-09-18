# React-Bounds.js

[![react-bounds.js on NPM](https://img.shields.io/npm/v/react-bounds.js.svg)](https://www.npmjs.com/package/react-bounds.js)

Asynchronous boundary detection for react, based on Bounds.js by Christopher Cavalea.

[DEMO](https://tecladistaprod.github.io/react-bounds.js)

### Why

Whether you're lazy-loading images, implementing infinite-scroll, or avoiding an ex-lover... it's important to set boundaries.

Historically, boundary detection required a mix of event handlers, loops, and calls to [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). Since these operations run on the main thread, performance would suffer.

React-Bounds.js defies these expectations, providing a simple and powerful API. It detects intersections between elements asynchronously, keeping complex operations off the main thread and improving performance.

## Usage

Follow these steps to get started:

1. [Install](#install)
2. [How to Use](#howToUse)
3. [Options](#options)
4. [Browser Support](#browserSupport)

## Install

Using NPM or yarn, install react-bounds.js, and save it to your `package.json` dependencies.

```bash
$ npm install react-bounds.js
// or
$ yarn add react-bounds.js
```

Then import, naming it according to your preference.

```es6
import bound from "react-bounds.js";
```

## How to Use

The first step is to create a new boundary using react-bounds.js. To do so, call it and pass in your desired options. Each option and its default is explained in the [options](#options) section below.

```jsx
const Image = bound.img(); // initialize with default options

class Comp extends React.Component {
    state = {
        imageClass: ''
    };
    handleImage = (el, ratio) => {
        /*
            in onLeave event ratio is equal to 0
        */
        if(ratio){
            this.setState({ imageClass: 'animate' });
        } else {
            this.setState({ imageClass: '' });
        }
    };
    return(
        <div>
            {
                /*
                ...otherItems
                */
            }
            <Image
                className={this.state.imageClass}
                src="src"
                onEnter={this.handleImage}
                onLeave={this.handleImage}
            />
        </div>
    );
};
```

Now that we've covered the basics, lets delve into the [options](#options)

## Options

You are not required to pass any options during boundary creation. All options come with sensible defaults, shown below:

```es6
// default options
{
  root: window,       // the top-level document's viewport
  margins: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  threshold: 0.0,
  onEmit: () => {}
}
```

Explanation of each option follows:

- [root](#root)
- [margins](#margins)
- [threshold](#threshold)
- [onEmit](#onEmit)

### root

Accepts a `DOM node`.

The root is the element for which we are creating the boundary. Events will be emitted whenever a watched element enters/exits the root element.

Ex:

```jsx
class Comp extends Component {
  boxRef = null;
  Circle = null;

  componentDidMount() {
    if (this.boxRef) {
      this.Circle = bound.div({ root: this.boxRef });
    }
  }

  doSomething = (el, ratio) => {};

  render() {
    const { Circle } = this;

    return (
      <div>
        <div ref={el => (this.boxRef = el)} className="box">
          {Circle && (
            <Circle onEnter={this.doSomething} onLeave={this.doSomething} />
          )}
        </div>
      </div>
    );
  }
}
```

### margins

Accepts a `mapping`, where values are stated in `pixels`.

You can specify a `top`, `right`, `bottom`, or `left` margin to add to the root's [bounding box](https://developer.mozilla.org/en-US/docs/Glossary/bounding_box). _This affects detection, NOT style_ on the root element. For example:

```es6
const Container = bound.div({
  margins: {
    bottom: 100
  }
});
```

The above boundary will fire a callback for any watched element that gets within 100px of its bottom border.

### threshold

Accepts a `number` between `0.0` and `1.0` or an `array` with `number` between `0.0` and `1.0`.

The ratio of intersecting area required before a callback is made. A threshold of `0.0` means that if even a single pixel of a watched element enters the boundary, a callback is made. A threshold of `1.0` means that every pixel of a watched element must be inside the boundary before a callback is made.

### onEmit

Accepts a `function` or anonymous function.

The provided callback will be executed whenever any watched element enters or exits the boundary, _once all individual callbacks have executed_. This is a useful option if you'd like some action to take place no matter what element enters/exits your boundary. Here is an example of how it can be used:

```es6
const Link = bound.a({
  onEmit: actions => {
    if (actions.some(action => action.inside)) {
      console.log("At least one element is inside my boundary");
    }
  }
});
```

As seen above, the `onEmit` callback will be passed an argument `actions`, which is an array of objects representing the actions taken directly beforehand. Each object in `actions` has the following detail:

```es6
{
  el, // DOM node
    inside, // boolean
    outside, // boolean
    ratio; // floating number
}
```

- [checkCompatibility](#checkcompatibility)

### bound

the bound object can return various html element, just using `bound.someHtmlElement`
EX:

```es6
const Circle = bound.div();
const Image = bound.img();
const Button = bound.button();
const Link = bound.a();
//etc...
```

The html returned come with onEnter and onLeave events in "tag", these events come with the element in first param and the ratio in second param.

## Browser Support

React-Bounds.js depends on the following browser APIs:

- [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

Consequently, it supports the following natively:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+
- iOS Safari 12.2+
- Chrome for Android 51+
- Opera - Supported
- IE - No Support

For browsers that do not currently support `IntersectionObserver`, consider a popular [polyfill](https://www.npmjs.com/package/intersection-observer) that has great browser support.

## License

[MIT](https://opensource.org/licenses/MIT). © 2019 Vitor Cruz
