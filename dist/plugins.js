"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jspsychAnimation = _interopRequireDefault(require("jspsych/plugins/jspsych-animation.js"));

var _jspsychAudioButtonResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-audio-button-response.js"));

var _jspsychAudioKeyboardResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-audio-keyboard-response.js"));

var _jspsychAudioSliderResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-audio-slider-response.js"));

var _jspsychCallFunction = _interopRequireDefault(require("jspsych/plugins/jspsych-call-function.js"));

var _jspsychCategorizeHtml = _interopRequireDefault(require("jspsych/plugins/jspsych-categorize-html.js"));

var _jspsychExternalHtml = _interopRequireDefault(require("jspsych/plugins/jspsych-external-html.js"));

var _jspsychFreeSort = _interopRequireDefault(require("jspsych/plugins/jspsych-free-sort.js"));

var _jspsychFullscreen = _interopRequireDefault(require("jspsych/plugins/jspsych-fullscreen.js"));

var _jspsychHtmlButtonResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-html-button-response.js"));

var _jspsychHtmlKeyboardResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-html-keyboard-response.js"));

var _jspsychHtmlSliderResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-html-slider-response.js"));

var _jspsychIatHtml = _interopRequireDefault(require("jspsych/plugins/jspsych-iat-html.js"));

var _jspsychIatImage = _interopRequireDefault(require("jspsych/plugins/jspsych-iat-image.js"));

var _jspsychImageKeyboardResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-image-keyboard-response.js"));

var _jspsychImageSliderResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-image-slider-response.js"));

var _jspsychImageButtonResponse = _interopRequireDefault(require("jspsych/plugins/jspsych-image-button-response.js"));

var _jspsychInstructions = _interopRequireDefault(require("jspsych/plugins/jspsych-instructions.js"));

var _jspsychReconstruction = _interopRequireDefault(require("jspsych/plugins/jspsych-reconstruction.js"));

var _jspsychResize = _interopRequireDefault(require("jspsych/plugins/jspsych-resize.js"));

var _jspsychSameDifferentHtml = _interopRequireDefault(require("jspsych/plugins/jspsych-same-different-html.js"));

var _jspsychSameDifferentImage = _interopRequireDefault(require("jspsych/plugins/jspsych-same-different-image.js"));

var _jspsychSerialReactionTimeMouse = _interopRequireDefault(require("jspsych/plugins/jspsych-serial-reaction-time-mouse.js"));

var _jspsychSerialReactionTime = _interopRequireDefault(require("jspsych/plugins/jspsych-serial-reaction-time.js"));

var _jspsychSurveyLikert = _interopRequireDefault(require("jspsych/plugins/jspsych-survey-likert.js"));

var _jspsychSurveyMultiChoice = _interopRequireDefault(require("jspsych/plugins/jspsych-survey-multi-choice.js"));

var _jspsychSurveyMultiSelect = _interopRequireDefault(require("jspsych/plugins/jspsych-survey-multi-select.js"));

var _jspsychSurveyText = _interopRequireDefault(require("jspsych/plugins/jspsych-survey-text.js"));

var _jspsychVideo = _interopRequireDefault(require("jspsych/plugins/jspsych-video.js"));

var _jspsychVisualSearchCircle = _interopRequireDefault(require("jspsych/plugins/jspsych-visual-search-circle.js"));

var _jspsychVslAnimateOcclusion = _interopRequireDefault(require("jspsych/plugins/jspsych-vsl-animate-occlusion.js"));

var _jspsychVslGridScene = _interopRequireDefault(require("jspsych/plugins/jspsych-vsl-grid-scene.js"));

var _callback_html_keyboard_response = _interopRequireDefault(require("./callback_plugins/callback_html_keyboard_response"));

var _callback_image_keyboard_response = _interopRequireDefault(require("./callback_plugins/callback_image_keyboard_response"));

var plugins = {
  "animation": _jspsychAnimation.default,
  "audio-button-response": _jspsychAudioButtonResponse.default,
  "audio-slider-response": _jspsychAudioSliderResponse.default,
  "audio-keyboard-response": _jspsychAudioKeyboardResponse.default,
  "call-function": _jspsychCallFunction.default,
  "categorize-html": _jspsychCategorizeHtml.default,
  "external-html": _jspsychExternalHtml.default,
  "free-sort": _jspsychFreeSort.default,
  "fullscreen": _jspsychFullscreen.default,
  "html-button-response": _jspsychHtmlButtonResponse.default,
  "html-slider-response": _jspsychHtmlSliderResponse.default,
  "html-keyboard-response": _jspsychHtmlKeyboardResponse.default,
  "iat-html": _jspsychIatHtml.default,
  "iat-image": _jspsychIatImage.default,
  "image-slider-response": _jspsychImageSliderResponse.default,
  "image-keyboard-response": _jspsychImageKeyboardResponse.default,
  "image-button-response": _jspsychImageButtonResponse.default,
  "instructions": _jspsychInstructions.default,
  "reconstruction": _jspsychReconstruction.default,
  "resize": _jspsychResize.default,
  "same-different-html": _jspsychSameDifferentHtml.default,
  "same-different-image": _jspsychSameDifferentImage.default,
  "serial-reaction-time-mouse": _jspsychSerialReactionTimeMouse.default,
  "serial-reaction-time": _jspsychSerialReactionTime.default,
  "survey-likert": _jspsychSurveyLikert.default,
  "survey-multi-choice": _jspsychSurveyMultiChoice.default,
  "survey-multi-select": _jspsychSurveyMultiSelect.default,
  "survey-text": _jspsychSurveyText.default,
  "video": _jspsychVideo.default,
  "visual-search-circle": _jspsychVisualSearchCircle.default,
  "vsl-animate-occlusion": _jspsychVslAnimateOcclusion.default,
  "vsl-grid-scene": _jspsychVslGridScene.default,
  "callback-html-keyboard-response": _callback_html_keyboard_response.default,
  "callback-image-keyboard-response": _callback_image_keyboard_response.default
};
var _default = plugins;
exports.default = _default;