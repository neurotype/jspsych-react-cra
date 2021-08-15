"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "jsPsych", {
  enumerable: true,
  get: function get() {
    return _jspsych.default;
  }
});
exports.ExperimentWindow = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _jspsych = _interopRequireDefault(require("jspsych"));

var _plugins = _interopRequireDefault(require("./plugins"));

// load all built-in plugins
var ExperimentWindow = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ExperimentWindow, _Component);

  var _super = (0, _createSuper2.default)(ExperimentWindow);

  function ExperimentWindow(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ExperimentWindow);
    _this = _super.call(this, props);
    var default_timeline = [{
      type: "html-keyboard-response",
      stimulus: "This is the default timeline."
    }];
    Object.assign(_jspsych.default.plugins, _plugins.default, props.plugins);

    _this.handleKeyEvent = function (e) {
      if (e.redispatched) {
        return;
      }

      var new_event = new e.constructor(e.type, e);
      new_event.redispatched = true;

      _this.experimentDiv.dispatchEvent(new_event);
    };

    _this.experimentDiv = null;
    _this.width = props.width || "100%";
    _this.height = props.height || "100%";
    _this.settings = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.settings), {}, {
      timeline: props.settings.timeline || default_timeline
    });
    return _this;
  }

  (0, _createClass2.default)(ExperimentWindow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        id: "experimentWindow",
        style: {
          height: this.height,
          width: this.width
        },
        ref: function ref(e) {
          _this2.experimentDiv = e;
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("keyup", this.handleKeyEvent, true);
      window.addEventListener("keydown", this.handleKeyEvent, true);

      _jspsych.default.init((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.settings), {}, {
        display_element: this.experimentDiv
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("keyup", this.handleKeyEvent, true);
      window.removeEventListener("keydown", this.handleKeyEvent, true);

      try {
        _jspsych.default.endExperiment("Ended Experiment");
      } catch (e) {
        console.log("Experiment closed before unmount");
      }
    }
  }]);
  return ExperimentWindow;
}(_react.Component);

exports.ExperimentWindow = ExperimentWindow;