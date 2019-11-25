"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var checkForObserver = function checkForObserver() {
  if (!("IntersectionObserver" in window)) {
    throw new Error("\n      bounds.js requires IntersectionObserver on the global object.\n      IntersectionObserver is unavailable in IE and other older\n      versions of browsers.\n      See https://github.com/ChrisCavs/bounds.js/blob/master/README.md\n      for more compatibility information.\n    ");
  }
};

var getMargins = function getMargins() {
  var margins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _margins$top = margins.top,
      top = _margins$top === void 0 ? 0 : _margins$top,
      _margins$right = margins.right,
      right = _margins$right === void 0 ? 0 : _margins$right,
      _margins$bottom = margins.bottom,
      bottom = _margins$bottom === void 0 ? 0 : _margins$bottom,
      _margins$left = margins.left,
      left = _margins$left === void 0 ? 0 : _margins$left;
  return "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
};

var noOp = function noOp() {};

var Boundary =
/*#__PURE__*/
function () {
  function Boundary() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Boundary);

    var root = params.root,
        margins = params.margins,
        threshold = params.threshold,
        onEmit = params.onEmit;
    onEmit = onEmit || noOp;
    checkForObserver();
    var rootMargin = getMargins(margins);
    threshold = threshold || 0.0;
    var options = {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold
    };
    this.nodes = [];
    this.onEmit = onEmit;
    this.observer = new IntersectionObserver(this._emit.bind(this), options);
  } // API


  _createClass(Boundary, [{
    key: "watch",
    value: function watch(el) {
      var onEnter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noOp;
      var onLeave = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noOp;
      var data = {
        el: el,
        onEnter: onEnter,
        onLeave: onLeave
      };
      this.nodes.push(data);
      this.observer.observe(el);
      return data;
    }
  }, {
    key: "unWatch",
    value: function unWatch(el) {
      var index = this._findByNode(el, true);

      if (index !== -1) {
        this.nodes.splice(index, 1);
        this.observer.unobserve(el);
      }

      return this;
    }
  }, {
    key: "check",
    value: function check(el) {
      var data = this._findByNode(el) || {};
      return data.history;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.nodes = [];
      this.observer.disconnect();
      return this;
    }
  }, {
    key: "_emit",
    // HELPERS
    value: function _emit(events) {
      var _this = this;

      var actions = events.map(function (event) {
        var data = _this._findByNode(event.target);

        var ratio = event.intersectionRatio;
        data.history = event.isIntersecting;
        event.isIntersecting ? data.onEnter(ratio) : data.onLeave(ratio);
        return {
          el: event.target,
          inside: event.isIntersecting,
          outside: !event.isIntersecting,
          ratio: event.intersectionRatio
        };
      });
      this.onEmit(actions);
    }
  }, {
    key: "_findByNode",
    value: function _findByNode(el) {
      var returnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var func = returnIndex ? "findIndex" : "find";
      return this.nodes[func](function (node) {
        return node.el.isEqualNode(el);
      });
    }
  }], [{
    key: "checkCompatibility",
    value: function checkCompatibility() {
      checkForObserver();
    }
  }]);

  return Boundary;
}();

var _default = Boundary;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", // SVG
"circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _domElements = _interopRequireDefault(require("./domElements"));

var _bound = _interopRequireDefault(require("./bound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var boundaryEls = {};

_domElements["default"].forEach(function (el) {
  boundaryEls[el] = boundElement(el);
});

function boundElement(el) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var Element = _react["default"].forwardRef(function (pps, r) {
      return (0, _react.createElement)(el, _objectSpread({}, pps, {
        ref: r
      }));
    });

    var BoundElement =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(BoundElement, _PureComponent);

      function BoundElement(props) {
        var _this;

        _classCallCheck(this, BoundElement);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(BoundElement).call(this, props));
        _this.state = {
          bound: null
        };
        _this.refEl = null;
        return _this;
      }

      _createClass(BoundElement, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          options = options || {};

          if (this.refEl) {
            var _this$props = this.props,
                onEnter = _this$props.onEnter,
                onLeave = _this$props.onLeave;
            var bound = new _bound["default"](options);

            var fn = function fn() {};

            onEnter = onEnter || fn;
            onLeave = onLeave || fn;
            bound.watch(this.refEl, onEnter.bind(null, this.refEl), onLeave.bind(null, this.refEl));
            this.setState({
              bound: bound
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.state.bound) this.state.bound.clear();
          this.setState({
            bound: null
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var nP = _objectSpread({}, this.props);

          delete nP.onEnter;
          delete nP.onLeave;
          delete nP.innerRef;
          return _react["default"].createElement(Element, _extends({}, nP, {
            ref: function ref(el) {
              _this2.refEl = el;
              if (_this2.props.innerRef) return _this2.props.innerRef(el);else return null;
            }
          }));
        }
      }]);

      return BoundElement;
    }(_react.PureComponent);

    return _react["default"].forwardRef(function (props, ref) {
      var nProps = _objectSpread({}, props, {
        innerRef: ref
      });

      return _react["default"].createElement(BoundElement, nProps);
    });
  };
}

var _default = boundaryEls;
exports["default"] = _default;
