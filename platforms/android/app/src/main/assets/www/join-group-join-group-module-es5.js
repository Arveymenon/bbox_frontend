(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-group-join-group-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/join-group/join-group.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/join-group/join-group.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button routerLink=\"/home/tabs/tab1\">\n            <ion-icon class=\"back-button\" slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n      <ion-title>\n        {{'Join a Group'|translate}}\n      </ion-title>\n      <ion-buttons slot=\"end\" size=\"small\">\n          <ion-button class=\"no-padding\">\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n          </ion-button>\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n          </ion-button>\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button  (click)=\"createGroup()\">\n          <ion-icon name=\"md-create\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <ion-list class=\"ion-no-padding\" lines=\"none\" style=\"padding-bottom: 100px;\">\n      <div *ngFor=\"let gp of userArray\">\n\n      <!-- Single chat item, for new message add class \"unread\" and add attribute color with value \"secondary\" -->\n        <ion-item class=\"chat-item unread\" color=\"secondary\" >\n                  \n          <ion-label>\n            <ion-grid>\n              <ion-row>\n                <ion-col size-sm=\"1\" size-xs=\"2\" class=\"left\">\n                    <img class=\"group-icon\" src=\"assets/images/user.png\">\n                </ion-col>\n                <ion-col size-sm=\"9\" size-xs=\"8\" class=\"middle\">\n                    <h2 class=\"group-name\">{{gp.name}}</h2>\n                   \n                </ion-col>\n                <ion-col size-sm=\"2\" size-xs=\"2\">\n                  <ion-row class=\"right\">\n                    <ion-col class=\"message-time-container ion-no-padding\">\n                      <!-- <span class=\"message-time\">19:37</span> -->\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col no-padding class=\"message-badge-container\">\n                      <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\" (click)=\"onAccept(gp.id)\">\n                          <ion-icon name=\"md-checkmark\"></ion-icon>\n                      </ion-button>\n                      <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\" (click)=\"onDelete(gp.id)\">\n                          <ion-icon name=\"md-close\" color=\"danger\"></ion-icon>\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-label>\n        </ion-item>\n        </div>\n\n<!-- \n        <ion-item class=\"chat-item\">\n            <ion-label>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-sm=\"1\" size-xs=\"2\" class=\"left\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </ion-col>\n                  <ion-col size-sm=\"9\" size-xs=\"8\" class=\"middle\">\n                      <h2 class=\"group-name\">Group 2</h2>\n                      <p class=\"group-message\"><span>Emma Doe</span>: <span>Sounds Awesome</span></p>\n                  </ion-col>\n                  <ion-col size-sm=\"2\" size-xs=\"2\">\n                    <ion-row class=\"right\">\n                      <ion-col class=\"message-time-container ion-no-padding\">\n                        <span class=\"message-time\">19:37</span>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col no-padding class=\"message-badge-container\">\n                        <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\">\n                            <ion-icon name=\"md-checkmark\"></ion-icon>\n                        </ion-button>\n                        <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\">\n                            <ion-icon name=\"md-close\" color=\"danger\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-label>\n          </ion-item>\n\n\n        <ion-item class=\"chat-item\">\n            <ion-label>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-sm=\"1\" size-xs=\"2\" class=\"left\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </ion-col>\n                  <ion-col size-sm=\"9\" size-xs=\"8\" class=\"middle\">\n                      <h2 class=\"group-name\">Group 3</h2>\n                      <p class=\"group-message\"><span>Emma Doe</span>: <span>Sounds Awesome</span></p>\n                  </ion-col>\n                  <ion-col size-sm=\"2\" size-xs=\"2\">\n                    <ion-row class=\"right\">\n                      <ion-col class=\"message-time-container ion-no-padding\">\n                        <span class=\"message-time\">19:37</span>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col no-padding class=\"message-badge-container\">\n                        <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\">\n                            <ion-icon name=\"md-checkmark\"></ion-icon>\n                        </ion-button>\n                        <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\">\n                            <ion-icon name=\"md-close\" color=\"danger\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-label>\n          </ion-item>\n\n\n        <ion-item class=\"chat-item\">\n            <ion-label>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-sm=\"1\" size-xs=\"2\" class=\"left\">\n                      <img class=\"group-icon\" src=\"assets/images/user.png\">\n                  </ion-col>\n                  <ion-col size-sm=\"9\" size-xs=\"8\" class=\"middle\">\n                      <h2 class=\"group-name\">Group 4</h2>\n                      <p class=\"group-message\"><span>Emma Doe</span>: <span>Sounds Awesome</span></p>\n                  </ion-col>\n                  <ion-col size-sm=\"2\" size-xs=\"2\">\n                    <ion-row class=\"right\">\n                      <ion-col class=\"message-time-container ion-no-padding\">\n                        <span class=\"message-time\">19:37</span>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col no-padding class=\"message-badge-container\">\n                        <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\">\n                            <ion-icon name=\"md-checkmark\"></ion-icon>\n                        </ion-button>\n                        <ion-button fill=\"clear\" class=\"ion-no-padding approve-button\">\n                            <ion-icon name=\"md-close\" color=\"danger\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-label>\n          </ion-item> -->\n\n\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.3.6
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Capitalize the first letter of a string
 * @param str
 */

var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var isJqueryElement = function isJqueryElement(elem) {
  return _typeof(elem) === 'object' && elem.jquery;
};

var isElement = function isElement(elem) {
  return elem instanceof Element || isJqueryElement(elem);
};

var argsToParams = function argsToParams(args) {
  var params = {};

  if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
    _extends(params, args[0]);
  } else {
    ['title', 'html', 'icon'].forEach(function (name, index) {
      var arg = args[index];

      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== undefined) {
        error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
      }
    });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var getContainer = function getContainer() {
  return document.body.querySelector(".".concat(swalClasses.container));
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector(".".concat(className));
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
};
var getCancelButton = function getCancelButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getTimerProgressBar = function getTimerProgressBar() {
  return elementByClass(swalClasses['timer-progress-bar']);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
}; // https://github.com/jkup/focusable/blob/master/index.js

var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
  var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};

var removeCustomClasses = function removeCustomClasses(elem) {
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });
};

var applyCustomClass = function applyCustomClass(elem, customClass, className) {
  removeCustomClasses(elem);

  if (customClass && customClass[className]) {
    if (typeof customClass[className] !== 'string' && !customClass[className].forEach) {
      return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(customClass[className]), "\""));
    }

    addClass(elem, customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};
var animateTimerProgressBar = function animateTimerProgressBar(timer) {
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var timerProgressBar = getTimerProgressBar();

  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none';
      timerProgressBar.style.width = '100%';
    }

    setTimeout(function () {
      timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
      timerProgressBar.style.width = '0%';
    }, 10);
  }
};
var stopTimerProgressBar = function stopTimerProgressBar() {
  var timerProgressBar = getTimerProgressBar();
  var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = '100%';
  var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } // Custom class


  applyCustomClass(actions, params.customClass, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
  }
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
  button.innerHTML = params["".concat(buttonType, "ButtonText")]; // Set caption text

  button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params.customClass, "".concat(buttonType, "Button"));
  addClass(button, params["".concat(buttonType, "ButtonClass")]);
}

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = "grow-".concat(grow);

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params.customClass, 'container');
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    inputContainer.className = inputClass;

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input) {
    if (rerender) {
      showInput(params);
    } // set custom class


    setCustomClass(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var inputContainer = getInputContainer(params.input);
  var input = renderInputType[params.input](inputContainer, params);
  show(input); // input autofocus

  setTimeout(function () {
    focusInput(input);
  });
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setCustomClass = function setCustomClass(params) {
  var inputContainer = getInputContainer(params.input);

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var getInputContainer = function getInputContainer(inputType) {
  var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getChildByClass(getContent(), inputClass);
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (input, params) {
  setInputPlaceholder(input, params);
  return input;
};

renderInputType.range = function (range, params) {
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (select, params) {
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function (radio) {
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (checkboxContainer, params) {
  var checkbox = getInput(getContent(), 'checkbox');
  checkbox.value = 1;
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  var label = checkboxContainer.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkboxContainer;
};

renderInputType.textarea = function (textarea, params) {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);

  if ('MutationObserver' in window) {
    // #1699
    var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

    var outputsize = function outputsize() {
      var contentWidth = textarea.offsetWidth + popupPadding;

      if (contentWidth > initialPopupWidth) {
        getPopup().style.width = "".concat(contentWidth, "px");
      } else {
        getPopup().style.width = null;
      }
    };

    new MutationObserver(outputsize).observe(textarea, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params.customClass, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params.customClass, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton();
  closeButton.innerHTML = params.closeButtonHtml; // Custom class

  applyCustomClass(closeButton, params.customClass, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

  if (innerParams && params.icon === innerParams.icon && getIcon()) {
    applyCustomClass(getIcon(), params.customClass, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.icon) {
    return;
  }

  if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
    show(icon); // Custom or default content

    setContent(icon, params);
    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params.customClass, 'icon'); // Animate icon

    addClass(icon, params.showClass.icon);
  } else {
    error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var setContent = function setContent(icon, params) {
  icon.innerHTML = '';

  if (params.iconHtml) {
    icon.innerHTML = iconContent(params.iconHtml);
  } else if (params.icon === 'success') {
    icon.innerHTML = "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ";
  } else if (params.icon === 'error') {
    icon.innerHTML = "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ";
  } else {
    var defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    };
    icon.innerHTML = iconContent(defaultIconHtml[params.icon]);
  }
};

var iconContent = function iconContent(content) {
  return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params.customClass, 'image');
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params.customClass, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params.customClass, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params.customClass, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  }
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);

  if (typeof params.onRender === 'function') {
    params.onRender(getPopup());
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire();
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  show(actions);
  show(confirmButton, 'inline-block');
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  if (globalState.timeout) {
    var remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  if (globalState.timeout) {
    var remaining = globalState.timeout.increase(n);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: null,
  iconHtml: null,
  toast: false,
  animation: true,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show'
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide'
  },
  customClass: '',
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  timer: null,
  timerProgressBar: false,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onOpen: null,
  onRender: null,
  onClose: null,
  onAfterClose: null,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  animation: 'showClass" and "hideClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated(param);
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = "".concat(offset * -1, "px");
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  var backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose();
    }

    if (!getPopup()) {
      disposeSwal(instance);
    }
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var domCache = privateProps.domCache.get(this);
  return domCache.progressSteps;
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

  setScrollingVisibility(container, popup);

  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding);
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (typeof params.onOpen === 'function') {
    setTimeout(function () {
      return params.onOpen(popup);
    });
  }
};

var setScrollingVisibility = function setScrollingVisibility(container, popup) {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
  } else {
    container.style.overflowY = 'auto';
  }
};

var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
  iOSfix();
  IEfix();
  setAriaHidden();

  if (scrollbarPadding) {
    fixScrollbar();
  } // sweetalert2/issues/1247


  setTimeout(function () {
    container.scrollTop = 0;
  });
};

var addClasses = function addClasses(container, popup, params) {
  addClass(popup, params.showClass.popup);
  addClass(container, params.showClass.backdrop);
  show(popup);
  addClass([document.documentElement, document.body], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
    handleInputValue(instance, params);
  }
};
var getInputValue = function getInputValue(instance, innerParams) {
  var input = instance.getInput();

  if (!input) {
    return null;
  }

  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);

    case 'radio':
      return getRadioValue(input);

    case 'file':
      return getFileValue(input);

    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

var getCheckboxValue = function getCheckboxValue(input) {
  return input.checked ? 1 : 0;
};

var getRadioValue = function getRadioValue(input) {
  return input.checked ? input.value : null;
};

var getFileValue = function getFileValue(input) {
  return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};

var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error("Error in inputValue promise: ".concat(err));
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
  instance.disableButtons();

  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams);
  } else {
    confirm(instance, innerParams, true);
  }
};
var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
  var inputValue = getInputValue(instance, innerParams);

  if (innerParams.inputValidator) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return innerParams.inputValidator(inputValue, innerParams.validationMessage);
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else {
    confirm(instance, innerParams, inputValue);
  }
};

var succeedWith = function succeedWith(instance, value) {
  instance.closePopup({
    value: value
  });
};

var confirm = function confirm(instance, innerParams, value) {
  if (innerParams.showLoaderOnConfirm) {
    showLoading(); // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    var preConfirmPromise = Promise.resolve().then(function () {
      return innerParams.preConfirm(value, innerParams.validationMessage);
    });
    preConfirmPromise.then(function (preConfirmValue) {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    });
  } else {
    succeedWith(instance, value);
  }
};

var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = function (e) {
      return keydownHandler(instance, e, innerParams, dismissWith);
    };

    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
}; // Focus handling

var setFocus = function setFocus(innerParams, index, increment) {
  var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

  for (var i = 0; i < focusableElements.length; i++) {
    index = index + increment; // rollover to first item

    if (index === focusableElements.length) {
      index = 0; // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }

    return focusableElements[index].focus();
  } // no visible focusable elements, focus the popup


  getPopup().focus();
};
var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
];
var escKeys = ['Escape', 'Esc' // IE11
];

var keydownHandler = function keydownHandler(instance, e, innerParams, dismissWith) {
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  } // ENTER


  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams); // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams); // ARROWS - switch focus between buttons
  } else if (arrowKeys.indexOf(e.key) !== -1) {
    handleArrows(); // ESC
  } else if (escKeys.indexOf(e.key) !== -1) {
    handleEsc(e, innerParams, dismissWith);
  }
};

var handleEnter = function handleEnter(instance, e, innerParams) {
  // #720 #721
  if (e.isComposing) {
    return;
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
      return; // do not submit
    }

    clickConfirm();
    e.preventDefault();
  }
};

var handleTab = function handleTab(e, innerParams) {
  var targetElement = e.target;
  var focusableElements = getFocusableElements();
  var btnIndex = -1;

  for (var i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
  }

  e.stopPropagation();
  e.preventDefault();
};

var handleArrows = function handleArrows() {
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

  if (document.activeElement === confirmButton && isVisible(cancelButton)) {
    cancelButton.focus(); // and vice versa
  } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
    confirmButton.focus();
  }
};

var handleEsc = function handleEsc(e, innerParams, dismissWith) {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

var handlePopupClick = function handlePopupClick(domCache, innerParams, dismissWith) {
  if (innerParams.toast) {
    handleToastClick(domCache, innerParams, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

    handleContainerMousedown(domCache);
    handleModalClick(domCache, innerParams, dismissWith);
  }
};

var handleToastClick = function handleToastClick(domCache, innerParams, dismissWith) {
  // Closing toast by internal click
  domCache.popup.onclick = function () {
    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
      return;
    }

    dismissWith(DismissReason.close);
  };
};

var ignoreOutsideClick = false;

var handleModalMousedown = function handleModalMousedown(domCache) {
  domCache.popup.onmousedown = function () {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup

      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleContainerMousedown = function handleContainerMousedown(domCache) {
  domCache.container.onmousedown = function () {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleModalClick = function handleModalClick(domCache, innerParams, dismissWith) {
  domCache.container.onclick = function (e) {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }

    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

function _main(userParams) {
  showWarningsForParams(userParams); // Check if there is another Swal closing

  if (getPopup() && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  var innerParams = prepareParams(userParams);
  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = populateDomCache(this);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  return swalPromise(this, domCache, innerParams);
}

var prepareParams = function prepareParams(userParams) {
  var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

  var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

  var params = _extends({}, defaultParams, userParams);

  params.showClass = showClass;
  params.hideClass = hideClass; // @deprecated

  if (userParams.animation === false) {
    params.showClass = {
      popup: '',
      backdrop: 'swal2-backdrop-show swal2-noanimation'
    };
    params.hideClass = {};
  }

  return params;
};

var swalPromise = function swalPromise(instance, domCache, innerParams) {
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var dismissWith = function dismissWith(dismiss) {
      instance.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(instance, resolve);
    setupTimer(globalState, innerParams, dismissWith);

    domCache.confirmButton.onclick = function () {
      return handleConfirmButtonClick(instance, innerParams);
    };

    domCache.cancelButton.onclick = function () {
      return handleCancelButtonClick(instance, dismissWith);
    };

    domCache.closeButton.onclick = function () {
      return dismissWith(DismissReason.close);
    };

    handlePopupClick(domCache, innerParams, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    }

    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

    domCache.container.scrollTop = 0;
  });
};

var populateDomCache = function populateDomCache(instance) {
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
  var timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);

  if (innerParams.timer) {
    globalState$$1.timeout = new Timer(function () {
      dismissWith('timer');
      delete globalState$$1.timeout;
    }, innerParams.timer);

    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      setTimeout(function () {
        animateTimerProgressBar(innerParams.timer);
      });
    }
  }
};

var initFocus = function initFocus(domCache, innerParams) {
  if (innerParams.toast) {
    return;
  }

  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }

  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    return domCache.cancelButton.focus();
  }

  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    return domCache.confirmButton.focus();
  }

  setFocus(innerParams, -1, 1);
};

var blurActiveElement = function blurActiveElement() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

/**
 * Updates popup parameters.
 */

function update(params) {
  var popup = getPopup();
  var innerParams = privateProps.innerParams.get(this);

  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }

  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '9.3.6';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swal2-popup.swal2-toast {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0.625em;\n  overflow-y: hidden;\n  box-shadow: 0 0 0.625em #d9d9d9; }\n  .swal2-popup.swal2-toast .swal2-header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n  .swal2-popup.swal2-toast .swal2-title {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    margin: 0 0.6em;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-footer {\n    margin: 0.5em 0 0;\n    padding: 0.5em 0 0;\n    font-size: 0.8em; }\n  .swal2-popup.swal2-toast .swal2-close {\n    position: static;\n    width: 0.8em;\n    height: 0.8em;\n    line-height: 0.8; }\n  .swal2-popup.swal2-toast .swal2-content {\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-icon {\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n    margin: 0; }\n  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      font-size: 1.8em;\n      font-weight: bold; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n        .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n          font-size: .25em; } }\n  .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n      width: 2em;\n      height: 2em; }\n  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      top: .875em;\n      width: 1.375em; }\n  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: .3125em; }\n  .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: .3125em; }\n  .swal2-popup.swal2-toast .swal2-actions {\n    flex-basis: auto !important;\n    width: auto;\n    height: auto;\n    margin: 0 .3125em; }\n  .swal2-popup.swal2-toast .swal2-styled {\n    margin: 0 .3125em;\n    padding: .3125em .625em;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-styled:focus {\n      box-shadow: 0 0 0 0.0625em #fff, 0 0 0 0.125em rgba(50, 100, 150, 0.4); }\n  .swal2-popup.swal2-toast .swal2-success {\n    border-color: #a5dc86; }\n  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 1.6em;\n      height: 3em;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -.8em;\n        left: -.5em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 2em 2em;\n                transform-origin: 2em 2em;\n        border-radius: 4em 0 0 4em; }\n  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -.25em;\n        left: .9375em;\n        -webkit-transform-origin: 0 1.5em;\n                transform-origin: 0 1.5em;\n        border-radius: 0 4em 4em 0; }\n  .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n      width: 2em;\n      height: 2em; }\n  .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n      top: 0;\n      left: .4375em;\n      width: .4375em;\n      height: 2.6875em; }\n  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n      height: .3125em; }\n  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 1.125em;\n        left: .1875em;\n        width: .75em; }\n  .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: .9375em;\n        right: .1875em;\n        width: 1.375em; }\n  .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n      -webkit-animation: swal2-toast-animate-success-line-tip .75s;\n              animation: swal2-toast-animate-success-line-tip .75s; }\n  .swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n      -webkit-animation: swal2-toast-animate-success-line-long .75s;\n              animation: swal2-toast-animate-success-line-long .75s; }\n  .swal2-popup.swal2-toast.swal2-show {\n    -webkit-animation: swal2-toast-show 0.5s;\n            animation: swal2-toast-show 0.5s; }\n  .swal2-popup.swal2-toast.swal2-hide {\n    -webkit-animation: swal2-toast-hide 0.1s forwards;\n            animation: swal2-toast-hide 0.1s forwards; }\n  .swal2-container {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.625em;\n  overflow-x: hidden;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch; }\n  .swal2-container.swal2-backdrop-show {\n    background: rgba(0, 0, 0, 0.4); }\n  .swal2-container.swal2-backdrop-hide {\n    background: transparent !important; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom > :first-child,\n  .swal2-container.swal2-bottom-start > :first-child,\n  .swal2-container.swal2-bottom-left > :first-child,\n  .swal2-container.swal2-bottom-end > :first-child,\n  .swal2-container.swal2-bottom-right > :first-child {\n    margin-top: auto; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n            flex: 1;\n    align-self: stretch;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n            flex: 1;\n    align-content: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n              align-items: center; }\n  .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n              align-items: flex-start; }\n  .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n              align-items: flex-end; }\n  .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n              flex: 1;\n      align-content: center;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border: none;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n  .swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #595959;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word; }\n  .swal2-actions {\n  display: -webkit-box;\n  display: flex;\n  z-index: 1;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  margin: 1.25em auto 0; }\n  .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n    opacity: .4; }\n  .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.1)));\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n  .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2)));\n    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n  .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n    box-sizing: border-box;\n    width: 2.5em;\n    height: 2.5em;\n    margin: .46875em;\n    padding: 0;\n    -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n            animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n    border: .25em solid transparent;\n    border-radius: 100%;\n    border-color: transparent;\n    background-color: transparent !important;\n    color: transparent;\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n    margin-right: 30px;\n    margin-left: 30px; }\n  .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n    content: '';\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    margin-left: 5px;\n    -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n            animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n    border: 3px solid #999999;\n    border-radius: 50%;\n    border-right-color: transparent;\n    box-shadow: 1px 1px 1px #fff; }\n  .swal2-styled {\n  margin: .3125em;\n  padding: .625em 2em;\n  box-shadow: none;\n  font-weight: 500; }\n  .swal2-styled:not([disabled]) {\n    cursor: pointer; }\n  .swal2-styled.swal2-confirm {\n    border: 0;\n    border-radius: 0.25em;\n    background: initial;\n    background-color: #3085d6;\n    color: #fff;\n    font-size: 1.0625em; }\n  .swal2-styled.swal2-cancel {\n    border: 0;\n    border-radius: 0.25em;\n    background: initial;\n    background-color: #aaa;\n    color: #fff;\n    font-size: 1.0625em; }\n  .swal2-styled:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-styled::-moz-focus-inner {\n    border: 0; }\n  .swal2-footer {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 1.25em 0 0;\n  padding: 1em 0 0;\n  border-top: 1px solid #eee;\n  color: #545454;\n  font-size: 1em; }\n  .swal2-timer-progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2); }\n  .swal2-image {\n  max-width: 100%;\n  margin: 1.25em auto; }\n  .swal2-close {\n  position: absolute;\n  z-index: 2;\n  /* 1617 */\n  top: 0;\n  right: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  overflow: hidden;\n  -webkit-transition: color 0.1s ease-out;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 0;\n  outline: initial;\n  background: transparent;\n  color: #cccccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer; }\n  .swal2-close:hover {\n    -webkit-transform: none;\n            transform: none;\n    background: transparent;\n    color: #f27474; }\n  .swal2-close::-moz-focus-inner {\n    border: 0; }\n  .swal2-content {\n  z-index: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0;\n  padding: 0;\n  color: #545454;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word; }\n  .swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em auto; }\n  .swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: 100%;\n  -webkit-transition: border-color 0.3s, box-shadow 0.3s;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: inherit;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n  color: inherit;\n  font-size: 1.125em; }\n  .swal2-input.swal2-inputerror,\n  .swal2-file.swal2-inputerror,\n  .swal2-textarea.swal2-inputerror {\n    border-color: #f27474 !important;\n    box-shadow: 0 0 2px #f27474 !important; }\n  .swal2-input:focus,\n  .swal2-file:focus,\n  .swal2-textarea:focus {\n    border: 1px solid #b4dbed;\n    outline: none;\n    box-shadow: 0 0 3px #c4e6f5; }\n  .swal2-input::-webkit-input-placeholder,\n  .swal2-file::-webkit-input-placeholder,\n  .swal2-textarea::-webkit-input-placeholder {\n    color: #cccccc; }\n  .swal2-input::-moz-placeholder,\n  .swal2-file::-moz-placeholder,\n  .swal2-textarea::-moz-placeholder {\n    color: #cccccc; }\n  .swal2-input::-ms-input-placeholder,\n  .swal2-file::-ms-input-placeholder,\n  .swal2-textarea::-ms-input-placeholder {\n    color: #cccccc; }\n  .swal2-input::placeholder,\n  .swal2-file::placeholder,\n  .swal2-textarea::placeholder {\n    color: #cccccc; }\n  .swal2-range {\n  margin: 1em auto;\n  background: inherit; }\n  .swal2-range input {\n    width: 80%; }\n  .swal2-range output {\n    width: 20%;\n    color: inherit;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-range input,\n  .swal2-range output {\n    height: 2.625em;\n    padding: 0;\n    font-size: 1.125em;\n    line-height: 2.625em; }\n  .swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em; }\n  .swal2-input[type='number'] {\n    max-width: 10em; }\n  .swal2-file {\n  background: inherit;\n  font-size: 1.125em; }\n  .swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em; }\n  .swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: .375em .625em;\n  background: inherit;\n  color: inherit;\n  font-size: 1.125em; }\n  .swal2-radio,\n.swal2-checkbox {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: inherit;\n  color: inherit; }\n  .swal2-radio label,\n  .swal2-checkbox label {\n    margin: 0 .6em;\n    font-size: 1.125em; }\n  .swal2-radio input,\n  .swal2-checkbox input {\n    margin: 0 .4em; }\n  .swal2-validation-message {\n  display: none;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300; }\n  .swal2-validation-message::before {\n    content: '!';\n    display: inline-block;\n    width: 1.5em;\n    min-width: 1.5em;\n    height: 1.5em;\n    margin: 0 .625em;\n    border-radius: 50%;\n    background-color: #f27474;\n    color: #fff;\n    font-weight: 600;\n    line-height: 1.5em;\n    text-align: center; }\n  .swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: .25em solid transparent;\n  border-radius: 50%;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon .swal2-icon-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    font-size: 3.75em; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474;\n    color: #f27474; }\n  .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n  .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      display: block;\n      position: absolute;\n      top: 2.3125em;\n      width: 2.9375em;\n      height: .3125em;\n      border-radius: .125em;\n      background-color: #f27474; }\n  .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 1.0625em;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n  .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 1em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n  .swal2-icon.swal2-error.swal2-icon-show {\n      -webkit-animation: swal2-animate-error-icon .5s;\n              animation: swal2-animate-error-icon .5s; }\n  .swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n        -webkit-animation: swal2-animate-error-x-mark .5s;\n                animation: swal2-animate-error-x-mark .5s; }\n  .swal2-icon.swal2-warning {\n    border-color: #facea8;\n    color: #f8bb86; }\n  .swal2-icon.swal2-info {\n    border-color: #9de0f6;\n    color: #3fc3ee; }\n  .swal2-icon.swal2-question {\n    border-color: #c9dae1;\n    color: #87adbd; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86;\n    color: #a5dc86; }\n  .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 3.75em;\n      height: 7.5em;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n  .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -.4375em;\n        left: -2.0635em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 3.75em 3.75em;\n                transform-origin: 3.75em 3.75em;\n        border-radius: 7.5em 0 0 7.5em; }\n  .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -.6875em;\n        left: 1.875em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 3.75em;\n                transform-origin: 0 3.75em;\n        border-radius: 0 7.5em 7.5em 0; }\n  .swal2-icon.swal2-success .swal2-success-ring {\n      position: absolute;\n      z-index: 2;\n      top: -.25em;\n      left: -.25em;\n      box-sizing: content-box;\n      width: 100%;\n      height: 100%;\n      border: 0.25em solid rgba(165, 220, 134, 0.3);\n      border-radius: 50%; }\n  .swal2-icon.swal2-success .swal2-success-fix {\n      position: absolute;\n      z-index: 1;\n      top: .5em;\n      left: 1.625em;\n      width: .4375em;\n      height: 5.625em;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n  .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      display: block;\n      position: absolute;\n      z-index: 2;\n      height: .3125em;\n      border-radius: .125em;\n      background-color: #a5dc86; }\n  .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 2.875em;\n        left: .875em;\n        width: 1.5625em;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n  .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: 2.375em;\n        right: .5em;\n        width: 2.9375em;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n      -webkit-animation: swal2-animate-success-line-tip .75s;\n              animation: swal2-animate-success-line-tip .75s; }\n  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n      -webkit-animation: swal2-animate-success-line-long .75s;\n              animation: swal2-animate-success-line-long .75s; }\n  .swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n      -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n              animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n  .swal2-progress-steps {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  background: inherit;\n  font-weight: 600; }\n  .swal2-progress-steps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progress-steps .swal2-progress-step {\n    z-index: 20;\n    width: 2em;\n    height: 2em;\n    border-radius: 2em;\n    background: #3085d6;\n    color: #fff;\n    line-height: 2em;\n    text-align: center; }\n  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n      background: #3085d6; }\n  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n        background: #add8e6;\n        color: #fff; }\n  .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n        background: #add8e6; }\n  .swal2-progress-steps .swal2-progress-step-line {\n    z-index: 10;\n    width: 2.5em;\n    height: .4em;\n    margin: 0 -1px;\n    background: #3085d6; }\n  [class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n  .swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s; }\n  .swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards; }\n  .swal2-noanimation {\n  -webkit-transition: none;\n  transition: none; }\n  .swal2-rtl .swal2-close {\n  right: auto;\n  left: 0; }\n  .swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto; }\n  @supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n  @-moz-document url-prefix() {\n  .swal2-close:focus {\n    outline: 2px solid rgba(50, 100, 150, 0.4); } }\n  @-webkit-keyframes swal2-toast-show {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg); }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg); }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg); }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0deg);\n            transform: translateY(0) rotateZ(0deg); } }\n  @keyframes swal2-toast-show {\n  0% {\n    -webkit-transform: translateY(-0.625em) rotateZ(2deg);\n            transform: translateY(-0.625em) rotateZ(2deg); }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg); }\n  66% {\n    -webkit-transform: translateY(0.3125em) rotateZ(2deg);\n            transform: translateY(0.3125em) rotateZ(2deg); }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0deg);\n            transform: translateY(0) rotateZ(0deg); } }\n  @-webkit-keyframes swal2-toast-hide {\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n  @keyframes swal2-toast-hide {\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n  @-webkit-keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: .5625em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: .125em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: .625em;\n    left: -.25em;\n    width: 1.625em; }\n  84% {\n    top: 1.0625em;\n    left: .75em;\n    width: .5em; }\n  100% {\n    top: 1.125em;\n    left: .1875em;\n    width: .75em; } }\n  @keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: .5625em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: .125em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: .625em;\n    left: -.25em;\n    width: 1.625em; }\n  84% {\n    top: 1.0625em;\n    left: .75em;\n    width: .5em; }\n  100% {\n    top: 1.125em;\n    left: .1875em;\n    width: .75em; } }\n  @-webkit-keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0; }\n  65% {\n    top: 1.25em;\n    right: .9375em;\n    width: 0; }\n  84% {\n    top: .9375em;\n    right: 0;\n    width: 1.125em; }\n  100% {\n    top: .9375em;\n    right: .1875em;\n    width: 1.375em; } }\n  @keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0; }\n  65% {\n    top: 1.25em;\n    right: .9375em;\n    width: 0; }\n  84% {\n    top: .9375em;\n    right: 0;\n    width: 1.125em; }\n  100% {\n    top: .9375em;\n    right: .1875em;\n    width: 1.375em; } }\n  @-webkit-keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @-webkit-keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n  @keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n  @-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: 1.0625em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: 2.1875em;\n    left: -.375em;\n    width: 3.125em; }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em; }\n  100% {\n    top: 2.8125em;\n    left: .875em;\n    width: 1.5625em; } }\n  @keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: .0625em;\n    width: 0; }\n  54% {\n    top: 1.0625em;\n    left: .125em;\n    width: 0; }\n  70% {\n    top: 2.1875em;\n    left: -.375em;\n    width: 3.125em; }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em; }\n  100% {\n    top: 2.8125em;\n    left: .875em;\n    width: 1.5625em; } }\n  @-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em; }\n  100% {\n    top: 2.375em;\n    right: .5em;\n    width: 2.9375em; } }\n  @keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0; }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em; }\n  100% {\n    top: 2.375em;\n    right: .5em;\n    width: 2.9375em; } }\n  @-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n  @keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n  @-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n  @keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 1.625em;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -.375em;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n  @-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n  @keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n  @-webkit-keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden; }\n  body.swal2-height-auto {\n  height: auto !important; }\n  body.swal2-no-backdrop .swal2-container {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  max-width: calc(100% - 0.625em * 2);\n  background-color: transparent !important; }\n  body.swal2-no-backdrop .swal2-container > .swal2-modal {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop .swal2-container.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-container.swal2-top-start, body.swal2-no-backdrop .swal2-container.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-container.swal2-top-end, body.swal2-no-backdrop .swal2-container.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop .swal2-container.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop .swal2-container.swal2-center-start, body.swal2-no-backdrop .swal2-container.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-container.swal2-center-end, body.swal2-no-backdrop .swal2-container.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-container.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-container.swal2-bottom-start, body.swal2-no-backdrop .swal2-container.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-container.swal2-bottom-end, body.swal2-no-backdrop .swal2-container.swal2-bottom-right {\n    right: 0;\n    bottom: 0; }\n  @media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important; }\n    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true'] {\n      display: none; }\n    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n      position: static !important; } }\n  body.swal2-toast-shown .swal2-container {\n  background-color: transparent; }\n  body.swal2-toast-shown .swal2-container.swal2-top {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n    top: 0;\n    right: 0;\n    bottom: auto;\n    left: auto; }\n  body.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0; }\n  body.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown .swal2-container.swal2-center {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0; }\n  body.swal2-toast-shown .swal2-container.swal2-bottom {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n    top: auto;\n    right: 0;\n    bottom: 0;\n    left: auto; }\n  body.swal2-toast-column .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n  body.swal2-toast-column .swal2-toast .swal2-actions {\n    -webkit-box-flex: 1;\n            flex: 1;\n    align-self: stretch;\n    height: 2.2em;\n    margin-top: .3125em; }\n  body.swal2-toast-column .swal2-toast .swal2-loading {\n    -webkit-box-pack: center;\n            justify-content: center; }\n  body.swal2-toast-column .swal2-toast .swal2-input {\n    height: 2em;\n    margin: .3125em auto;\n    font-size: 1em; }\n  body.swal2-toast-column .swal2-toast .swal2-validation-message {\n    font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3Njc3MvX3RvYXN0cy5zY3NzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9iYm94X2Zyb250ZW5kL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdmFyaWFibGVzLnNjc3MiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2Jib3hfZnJvbnRlbmQvbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3Njc3MvX2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3Njc3MvX3BvbHlmaWxscy5zY3NzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9iYm94X2Zyb250ZW5kL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc2Nzcy9fdG9hc3RzLWFuaW1hdGlvbnMuc2NzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3Njc3MvX2FuaW1hdGlvbnMuc2NzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N3ZWV0YWxlcnQyLnNjc3MiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2Jib3hfZnJvbnRlbmQvbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zY3NzL19ib2R5LnNjc3MiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2Jib3hfZnJvbnRlbmQvbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zY3NzL190b2FzdHMtYm9keS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQ3lLb0I7RUR4S3BCLGdCQ3lLd0I7RUR4S3hCLGtCQUFrQjtFQUNsQiwrQkNrS3VDLEVBQUE7RUR6SzNDO0lBVU0sOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQVZ6QjtJQWNNLG1CQUFZO1lBQVosWUFBWTtJQUNaLHVCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsZUMrSjJCO0lEOUozQixjQytKMkIsRUFBQTtFRGhMakM7SUFxQk0saUJDaUs4QjtJRGhLOUIsa0JDZ0s4QjtJRC9KOUIsZ0JDaUs2QixFQUFBO0VEeExuQztJQTJCTSxnQkFBZ0I7SUFDaEIsWUM4SStCO0lEN0kvQixhQzhJZ0M7SUQ3SWhDLGdCQzhJbUMsRUFBQTtFRDVLekM7SUFrQ00sdUJBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixjQzhJNkIsRUFBQTtFRGpMbkM7SUF1Q00sVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUyxFQUFBO0VBMUNmO01BNkNRLG9CQUFhO01BQWIsYUFBYTtNQUNiLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0VFL0N2QjtRRkRGO1VBbURVLGdCQUFnQixFQUFBLEVBRW5CO0VBckRQO01BeURVLFVBQVU7TUFDVixXQUFXLEVBQUE7RUExRHJCO01BZ0VVLFdBQVc7TUFDWCxjQUFjLEVBQUE7RUFqRXhCO1FBb0VZLGFBQWEsRUFBQTtFQXBFekI7UUF3RVksY0FBYyxFQUFBO0VBeEUxQjtJQStFTSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQWxGdkI7SUFzRk0saUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQzRGNkIsRUFBQTtFRHBMbkM7TUEyRlEsc0VDekZvQyxFQUFBO0VERjVDO0lBZ0dNLHFCQzlEaUIsRUFBQTtFRGxDdkI7TUFtR1Esa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixXQUFXO01BQ1gsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixrQkFBa0IsRUFBQTtFQXZHMUI7UUEwR1UsVUFBVTtRQUNWLFdBQVc7UUFDWCxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QixpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QiwwQkFBMEIsRUFBQTtFQTlHcEM7UUFrSFUsV0FBVztRQUNYLGFBQWE7UUFDYixpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QiwwQkFBMEIsRUFBQTtFQXJIcEM7TUEwSFEsVUFBVTtNQUNWLFdBQVcsRUFBQTtFQTNIbkI7TUErSFEsTUFBTTtNQUNOLGFBQWE7TUFDYixjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUFsSXhCO01Bc0lRLGVBQWUsRUFBQTtFQXRJdkI7UUF5SVUsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZLEVBQUE7RUEzSXRCO1FBK0lVLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYyxFQUFBO0VBakp4QjtNQXdKWSw0REFBb0Q7Y0FBcEQsb0RBQW9ELEVBQUE7RUF4SmhFO01BNEpZLDZEQUFxRDtjQUFyRCxxREFBcUQsRUFBQTtFQTVKakU7SUFtS00sd0NDRzJDO1lESDNDLGdDQ0cyQyxFQUFBO0VEdEtqRDtJQXVLTSxpRENBb0Q7WURBcEQseUNDQW9ELEVBQUE7RUV2SzFEO0VBRUUsb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdCRlA4QjtFRVE5QixrQkFBa0I7RUFDbEIseUNGYThDO0VFYjlDLGlDRmE4QztFRVY5QyxpQ0FBaUMsRUFBQTtFQWpCbkM7SUFvQkksOEJGbkJzQixFQUFBO0VFRDFCO0lBd0JJLGtDQUFrQyxFQUFBO0VBeEJ0QztJQTRCSSx3QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUE1QjNCO0lBaUNJLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsdUJBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBbEMvQjtJQXVDSSx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHFCQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtFQXhDN0I7SUE0Q0kseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBNUN2QjtJQWlESSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVCQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQWxEL0I7SUF1REkseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixxQkFBeUI7WUFBekIseUJBQXlCLEVBQUE7RUF4RDdCO0lBNERJLHNCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQTVEekI7SUFpRUksc0JBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix1QkFBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFsRS9CO0lBdUVJLHNCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIscUJBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0VBeEU3Qjs7Ozs7SUFnRkksZ0JBQWdCLEVBQUE7RUFoRnBCO0lBb0ZJLCtCQUF3QjtJQUF4Qix3QkFBd0I7SUFDeEIsbUJBQU87WUFBUCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQXZGM0I7SUEyRkksK0JBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixtQkFBTztZQUFQLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBOUYzQjtJQWtHSSxtQkFBTztZQUFQLE9BQU87SUFDUCw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQixFQUFBO0VBbkcxQjtNQXdHTSx5QkFBbUI7Y0FBbkIsbUJBQW1CLEVBQUE7RUF4R3pCO01BaUhNLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQWpIN0I7TUEwSE0sc0JBQXFCO2NBQXJCLHFCQUFxQixFQUFBO0VBMUgzQjtNQThITSwrQkFBd0I7TUFBeEIsd0JBQXdCO01BQ3hCLG1CQUFPO2NBQVAsT0FBTztNQUNQLHFCQUFxQjtNQUNyQix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFqSTdCO0lBcUpNLFlBQVksRUFBQTtFRHBKaEI7SUNERjtNQTJKTSxvQkFBb0IsRUFBQSxFQUNyQjtFQUlMO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixXRjlKZ0I7RUUrSmhCLGVBQWU7RUFDZixlRi9Kb0I7RUVnS3BCLFlGL0ppQjtFRWdLakIsdUJGL0oyQjtFRWdLM0IsZ0JGM0t3QjtFRTRLeEIsb0JGdEprQjtFRXVKbEIsZUZ0Sm9CLEVBQUE7RUV5SXRCO0lBZ0JJLGFBQWEsRUFBQTtFQWhCakI7SUFvQkksa0JBQWtCLEVBQUE7RUFJdEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCRm5KMkI7RUVvSjNCLFVBQVU7RUFDVixjRnBKMkM7RUVxSjNDLGtCRnBKNkI7RUVxSjdCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCQUFxQixFQUFBO0VBR3ZCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVGcEU0QjtFRXFFNUIseUJGcEVnQztVRW9FaEMsbUJGcEVnQztFRXFFaEMsd0JGcEVvQztVRW9FcEMsdUJGcEVvQztFRXFFcEMsV0ZwRXdCO0VFcUV4QixxQkZwRWtDLEVBQUE7RUU2RHBDO0lBWVEsV0FBVyxFQUFBO0VBWm5CO0lBZ0JRLG1IQUF5RjtJQUF6Rix5RUFBeUYsRUFBQTtFQWhCakc7SUFvQlEsbUhBQTJGO0lBQTNGLHlFQUEyRixFQUFBO0VBcEJuRztJQTRCUSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHNFQUE4RDtZQUE5RCw4REFBOEQ7SUFDOUQsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCLEVBQUE7RUF4Q3pCO0lBNENRLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQTdDekI7SUFvRFUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzRUFBOEQ7WUFBOUQsOERBQThEO0lBQzlELHlCQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLDRCRnhRZ0IsRUFBQTtFRStRMUI7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUpsQjtJQU9JLGVBQWUsRUFBQTtFQVBuQjtJQVdJLFNGekkyQjtJRTBJM0IscUJGeklzQztJRTBJdEMsbUJBQW1CO0lBQ25CLHlCRjFJMkM7SUUySTNDLFdGOVJzQjtJRStSdEIsbUJGMUlxQyxFQUFBO0VFMEh6QztJQW9CSSxTRjNJMEI7SUU0STFCLHFCRjNJcUM7SUU0SXJDLG1CQUFtQjtJQUNuQixzQkY1SXVDO0lFNkl2QyxXRnZTc0I7SUV3U3RCLG1CRjVJb0MsRUFBQTtFRW1IeEM7SUE2QkksYUYzSTZCO0lFNkk3Qiw2REY1U3dDLEVBQUE7RUU2UTVDO0lBbUNJLFNBQVMsRUFBQTtFQUliO0VBQ0Usd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkY3TThCO0VFOE05QixnQkY3TTRCO0VFOE01QiwwQkY3TThCO0VFOE05QixjRjdNNEM7RUU4TTVDLGNGN00wQixFQUFBO0VFZ041QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxjRmxOcUM7RUVtTnJDLDhCRnBVd0IsRUFBQTtFRXVVMUI7RUFDRSxlQUFlO0VBQ2YsbUJGL1I4QixFQUFBO0VFa1NoQztFQUNFLGtCRnJOb0M7RUVzTnBDLFVBQVU7RUFFVixTQUFBO0VBQ0EsTUZ4TndCO0VFeU54QixRRnpOd0I7RUUwTnhCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUYvTjhCO0VFZ085QixhRi9OK0I7RUVnTy9CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUNGOU5nRDtFRThOaEQsK0JGOU5nRDtFRStOaEQsWUY5TjhCO0VFK045QixnQkY5TmtDO0VFK05sQyxnQkY5TmtDO0VFK05sQyx1QkY5TnlDO0VFK056QyxjRjlOa0Q7RUUrTmxELGtCRjlOb0M7RUUrTnBDLGdCRjlOa0M7RUUrTmxDLGdCRnpPa0M7RUUwT2xDLGVBQWUsRUFBQTtFQXJCakI7SUF3QkksdUJGaE9xQztZRWdPckMsZUZoT3FDO0lFaU9yQyx1QkYvTjZDO0lFZ083QyxjRm5VaUIsRUFBQTtFRXlTckI7SUE4QkksU0FBUyxFQUFBO0VBSWI7RUFDRSxVQUFVO0VBQ1Ysd0JGOVRvQztVRThUcEMsdUJGOVRvQztFRStUcEMsU0Y5VHNCO0VFK1R0QixVRjlUc0I7RUUrVHRCLGNGOVQ2QztFRStUN0Msa0JGOVQrQjtFRStUL0IsbUJGOVRnQztFRStUaEMsbUJGOVRnQztFRStUaEMsa0JGOVQrQjtFRStUL0IscUJGOVRrQyxFQUFBO0VFaVVwQzs7Ozs7O0VBTUUsZ0JGcFUyQixFQUFBO0VFdVU3Qjs7O0VBR0Usc0JBQXNCO0VBQ3RCLFdGMVVzQjtFRTJVdEIsc0RGL1R1RDtFRStUdkQsOENGL1R1RDtFRWdVdkQseUJGelVzRDtFRTBVdEQsdUJGelVpQztFRTBVakMsbUJGcFU4QjtFRXFVOUIsK0NGN1l3QjtFRThZeEIsY0ZyVXlCO0VFc1V6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SUVnQ1EsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBQTtFRnBDeEM7SUV5Q1EsUUFBUTtJQUNSLFFBQVE7SUFDUixZQUFZO0lBQ1osVUFBVTtJQUNWLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFRjdDbkM7SUVrRFEsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsT0FBTyxFQUFBO0VGckRmO0lFeURRLFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUY3RG5DO0lFa0VRLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVUsRUFBQTtFRnJFbEI7RUU0RU0sNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VGN0UxQjtJRWdGUSxtQkFBTztZQUFQLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQixFQUFBO0VGbkYzQjtJRXVGUSx3QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUZ2Ri9CO0lFMkZRLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsY1Q4RXlCLEVBQUE7RU8zS2pDO0lFaUdRLGNUMkU4QixFQUFBIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2FsMi1wb3B1cCB7XG4gICYuc3dhbDItdG9hc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogJHN3YWwyLXRvYXN0LXdpZHRoO1xuICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1wYWRkaW5nO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItdG9hc3QtYm94LXNoYWRvdztcblxuICAgIC5zd2FsMi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAuc3dhbDItdGl0bGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1mb290ZXIge1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtZm9vdGVyLW1hcmdpbjtcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtZm9vdGVyLWZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc3dhbDItY2xvc2Uge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHdpZHRoOiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoO1xuICAgICAgaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC5zd2FsMi1jb250ZW50IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWNvbnRlbnQtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1pY29uIHtcbiAgICAgIHdpZHRoOiAyZW07XG4gICAgICBtaW4td2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMmVtO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgQGluY2x1ZGUgaWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1zdWNjZXNzIHtcbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWVycm9yIHtcbiAgICAgICAgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICAgICAgdG9wOiAuODc1ZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzc1ZW07XG5cbiAgICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICAgIGxlZnQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICAgICAgcmlnaHQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICB9XG5cbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgIG1hcmdpbjogMCAuMzEyNWVtO1xuICAgICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2VzcyB7XG4gICAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7IC8vIEVtdWxhdGUgbW92aW5nIGNpcmN1bGFyIGxpbmVcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICB0b3A6IC0uOGVtO1xuICAgICAgICAgIGxlZnQ6IC0uNWVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItc3VjY2Vzcy1maXgge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC40Mzc1ZW07XG4gICAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgICBoZWlnaHQ6IDIuNjg3NWVtO1xuICAgICAgfVxuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICAgIGhlaWdodDogLjMxMjVlbTtcblxuICAgICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICAgIHRvcDogMS4xMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuMTg3NWVtO1xuICAgICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICAgIHRvcDogLjkzNzVlbTtcbiAgICAgICAgICByaWdodDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3YWwyLXNob3cge1xuICAgICAgYW5pbWF0aW9uOiAkc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb247XG4gICAgfVxuXG4gICAgJi5zd2FsMi1oaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogJHN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiJHN3YWwyLXdoaXRlOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kc3dhbDItYmxhY2s6ICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRzd2FsMi1vdXRsaW5lLWNvbG9yOiByZ2JhKDUwLCAxMDAsIDE1MCwgLjQpICFkZWZhdWx0O1xuXG4vLyBDT05UQUlORVJcbiRzd2FsMi1jb250YWluZXItcGFkZGluZzogLjYyNWVtICFkZWZhdWx0O1xuXG4vLyBCT1ggTU9ERUxcbiRzd2FsMi13aWR0aDogMzJlbSAhZGVmYXVsdDtcbiRzd2FsMi1wYWRkaW5nOiAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlci1yYWRpdXM6IC4zMTI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm94LXNoYWRvdzogI2Q5ZDlkOSAhZGVmYXVsdDtcblxuLy8gQU5JTUFUSU9OU1xuJHN3YWwyLXNob3ctYW5pbWF0aW9uOiBzd2FsMi1zaG93IC4zcyAhZGVmYXVsdDtcbiRzd2FsMi1oaWRlLWFuaW1hdGlvbjogc3dhbDItaGlkZSAuMTVzIGZvcndhcmRzICFkZWZhdWx0O1xuXG4vLyBCQUNLR1JPVU5EXG4kc3dhbDItYmFja2dyb3VuZDogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuXG4vLyBUWVBPR1JBUEhZXG4kc3dhbDItZm9udDogaW5oZXJpdCAhZGVmYXVsdDtcbiRzd2FsMi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJBQ0tEUk9QXG4kc3dhbDItYmFja2Ryb3A6IHJnYmEoJHN3YWwyLWJsYWNrLCAuNCkgIWRlZmF1bHQ7XG4kc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgIWRlZmF1bHQ7XG5cbi8vIElDT05TXG4kc3dhbDItaWNvbi1zaXplOiA1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi1hbmltYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuJHN3YWwyLWljb24tbWFyZ2luOiAxLjI1ZW0gYXV0byAxLjg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tem9vbTogbnVsbCAhZGVmYXVsdDtcbiRzd2FsMi1zdWNjZXNzOiAjYTVkYzg2ICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3MtYm9yZGVyOiByZ2JhKCRzd2FsMi1zdWNjZXNzLCAuMykgIWRlZmF1bHQ7XG4kc3dhbDItZXJyb3I6ICNmMjc0NzQgIWRlZmF1bHQ7XG4kc3dhbDItd2FybmluZzogI2Y4YmI4NiAhZGVmYXVsdDtcbiRzd2FsMi1pbmZvOiAjM2ZjM2VlICFkZWZhdWx0O1xuJHN3YWwyLXF1ZXN0aW9uOiAjODdhZGJkICFkZWZhdWx0O1xuJHN3YWwyLWljb24tZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XG5cbi8vIElNQUdFXG4kc3dhbDItaW1hZ2UtbWFyZ2luOiAxLjI1ZW0gYXV0byAhZGVmYXVsdDtcblxuLy8gVElUTEVcbiRzd2FsMi10aXRsZS1tYXJnaW46IDAgMCAuNGVtICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzUpICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWZvbnQtc2l6ZTogMS44NzVlbSAhZGVmYXVsdDtcblxuLy8gQ09OVEVOVFxuJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1tYXJnaW46IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1wYWRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDMzKSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWZvbnQtd2VpZ2h0OiBub3JtYWwgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1saW5lLWhlaWdodDogbm9ybWFsICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtd29yZC13cmFwOiBicmVhay13b3JkICFkZWZhdWx0O1xuXG4vLyBJTlBVVFxuJHN3YWwyLWlucHV0LW1hcmdpbjogMWVtIGF1dG8gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtaGVpZ2h0OiAyLjYyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXBhZGRpbmc6IDAgLjc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDg1KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXItcmFkaXVzOiAuMTg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRzd2FsMi1ibGFjaywgLjA2KSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAwIDNweCAjYzRlNmY1ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTogMS4xMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzICFkZWZhdWx0O1xuXG4vLyBURVhUQVJFQSBTUEVDSUZJQyBWQVJJQUJMRVNcbiRzd2FsMi10ZXh0YXJlYS1oZWlnaHQ6IDYuNzVlbSAhZGVmYXVsdDtcbiRzd2FsMi10ZXh0YXJlYS1wYWRkaW5nOiAuNzVlbSAhZGVmYXVsdDtcblxuLy8gVkFMSURBVElPTiBNRVNTQUdFXG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQ6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA5NCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgNDApICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kOiAkc3dhbDItZXJyb3IgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuXG4vLyBQUk9HUkVTUyBTVEVQU1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWJhY2tncm91bmQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtbWFyZ2luOiAwIDAgMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1kaXN0YW5jZTogMi41ZW0gIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC13aWR0aDogMmVtO1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0OiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1ib3JkZXItcmFkaXVzOiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kOiAjYWRkOGU2ICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kOiAjMzA4NWQ2ICFkZWZhdWx0O1xuJHN3YWwyLWFjdGl2ZS1zdGVwLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIEZPT1RFUlxuJHN3YWwyLWZvb3Rlci1tYXJnaW46IDEuMjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLXBhZGRpbmc6IDFlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWJvcmRlci1jb2xvcjogI2VlZSAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMykgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuXG4vLyBUSU1FUiBQT0dSRVNTIEJBUlxuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ6IC4yNWVtO1xuJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKCRzd2FsMi1ibGFjaywgLjIpICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT05cbiRzd2FsMi1jbG9zZS1idXR0b24td2lkdGg6IDEuMmVtICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IDEuMmVtICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1saW5lLWhlaWdodDogMS4yICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1wb3NpdGlvbjogYWJzb2x1dGUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWdhcDogMCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXI6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmU6IGluaXRpYWwgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDgwKSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk6IHNlcmlmICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU6IDIuNWVtICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT046SE9WRVJcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItdHJhbnNmb3JtOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1jb2xvcjogJHN3YWwyLWVycm9yICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gQUNUSU9OU1xuJHN3YWwyLWFjdGlvbnMtZmxleC13cmFwOiB3cmFwICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtYWxpZ24taXRlbXM6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1tYXJnaW46IDEuMjVlbSBhdXRvIDAgIWRlZmF1bHQ7XG5cbi8vIENPTkZJUk0gQlVUVE9OXG4kc3dhbDItY29uZmlybS1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlci1yYWRpdXM6IC4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICMzMDg1ZDYgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1mb250LXNpemU6IDEuMDYyNWVtICFkZWZhdWx0O1xuXG4vLyBDQU5DRUwgQlVUVE9OXG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXI6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICNhYWEgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tZm9udC1zaXplOiAxLjA2MjVlbSAhZGVmYXVsdDtcblxuLy8gQ09NTU9OIFZBUklBQkxFUyBGT1IgQ09ORklSTSBBTkQgQ0FOQ0VMIEJVVFRPTlNcbiRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyOiByZ2JhKCRzd2FsMi1ibGFjaywgLjEpICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlOiByZ2JhKCRzd2FsMi1ibGFjaywgLjIpICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb2N1cy1vdXRsaW5lOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBudWxsICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAycHggJHN3YWwyLXdoaXRlLCAwIDAgMCA0cHggJHN3YWwyLW91dGxpbmUtY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRPQVNUU1xuJHN3YWwyLXRvYXN0LXNob3ctYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1zaG93IC41cyAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbjogc3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHMgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJveC1zaGFkb3c6IDAgMCAuNjI1ZW0gI2Q5ZDlkOSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24td2lkdGg6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDogLjhlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ6IC44ICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LXdpZHRoOiBhdXRvICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LXBhZGRpbmc6IC42MjVlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC10aXRsZS1tYXJnaW46IDAgLjZlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC10aXRsZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jb250ZW50LWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWlucHV0LWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LXZhbGlkYXRpb24tZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYnV0dG9ucy1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgLjA2MjVlbSAkc3dhbDItd2hpdGUsIDAgMCAwIC4xMjVlbSAkc3dhbDItb3V0bGluZS1jb2xvciAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luOiAuNWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItcGFkZGluZzogLjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtZm9vdGVyLWZvbnQtc2l6ZTogLjhlbSAhZGVmYXVsdDtcbiIsIkBtaXhpbiBpZSB7XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwMjUwMTYxXG5AbWl4aW4gbm90KCRpZ25vci1saXN0Li4uKSB7XG4gIEBpZiAobGVuZ3RoKCRpZ25vci1saXN0KSA9PSAxKSB7XG4gICAgJGlnbm9yLWxpc3Q6IG50aCgkaWdub3ItbGlzdCwgMSk7XG4gIH1cblxuICAkbm90LW91dHB1dDogJyc7XG5cbiAgQGVhY2ggJG5vdCBpbiAkaWdub3ItbGlzdCB7XG4gICAgJG5vdC1vdXRwdXQ6ICRub3Qtb3V0cHV0ICsgJzpub3QoI3skbm90fSknOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIHNjc3Mvbm8tZHVwbGljYXRlLWRvbGxhci12YXJpYWJsZXNcbiAgfVxuXG4gICYjeyRub3Qtb3V0cHV0fSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIi5zd2FsMi1jb250YWluZXIge1xuICAvLyBjZW50ZXJpbmdcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDYwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAkc3dhbDItY29udGFpbmVyLXBhZGRpbmc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWJhY2tkcm9wLXRyYW5zaXRpb247XG5cbiAgLy8gc3dlZXRhbGVydDIvaXNzdWVzLzkwNVxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgJi5zd2FsMi1iYWNrZHJvcC1zaG93IHtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2Ryb3A7XG4gIH1cblxuICAmLnN3YWwyLWJhY2tkcm9wLWhpZGUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLnN3YWwyLXRvcCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi10b3AtZW5kLFxuICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbSA+IDpmaXJzdC1jaGlsZCxcbiAgJi5zd2FsMi1ib3R0b20tc3RhcnQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLWxlZnQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLWVuZCA+IDpmaXJzdC1jaGlsZCxcbiAgJi5zd2FsMi1ib3R0b20tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctZnVsbHNjcmVlbiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYuc3dhbDItdG9wLFxuICAgICYuc3dhbDItY2VudGVyLFxuICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICAgJi5zd2FsMi10b3AtbGVmdCxcbiAgICAmLnN3YWwyLWNlbnRlci1sZWZ0LFxuICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICYuc3dhbDItY2VudGVyLWVuZCxcbiAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgJi5zd2FsMi10b3AtcmlnaHQsXG4gICAgJi5zd2FsMi1jZW50ZXItcmlnaHQsXG4gICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgICYgPiAuc3dhbDItbW9kYWwge1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgZmxleDogMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG5vdCgnLnN3YWwyLXRvcCcsXG4gICcuc3dhbDItdG9wLXN0YXJ0JyxcbiAgJy5zd2FsMi10b3AtZW5kJyxcbiAgJy5zd2FsMi10b3AtbGVmdCcsXG4gICcuc3dhbDItdG9wLXJpZ2h0JyxcbiAgJy5zd2FsMi1jZW50ZXItc3RhcnQnLFxuICAnLnN3YWwyLWNlbnRlci1lbmQnLFxuICAnLnN3YWwyLWNlbnRlci1sZWZ0JyxcbiAgJy5zd2FsMi1jZW50ZXItcmlnaHQnLFxuICAnLnN3YWwyLWJvdHRvbScsXG4gICcuc3dhbDItYm90dG9tLXN0YXJ0JyxcbiAgJy5zd2FsMi1ib3R0b20tZW5kJyxcbiAgJy5zd2FsMi1ib3R0b20tbGVmdCcsXG4gICcuc3dhbDItYm90dG9tLXJpZ2h0JyxcbiAgJy5zd2FsMi1ncm93LWZ1bGxzY3JlZW4nKSB7XG4gICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgaWUge1xuICAgIC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICRzd2FsMi13aWR0aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkc3dhbDItcGFkZGluZztcbiAgYm9yZGVyOiAkc3dhbDItYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItZm9udDtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9udC1zaXplO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmLnN3YWwyLWxvYWRpbmcge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLXRpdGxlLW1hcmdpbjtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICRzd2FsMi10aXRsZS1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItdGl0bGUtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTsgLy8gcHJldmVudCBzdWNlc3MgaWNvbiBmcm9tIG92ZXJsYXBwaW5nIGJ1dHRvbnNcbiAgZmxleC13cmFwOiAkc3dhbDItYWN0aW9ucy1mbGV4LXdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItYWN0aW9ucy1hbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItYWN0aW9ucy1qdXN0aWZ5LWNvbnRlbnQ7XG4gIHdpZHRoOiAkc3dhbDItYWN0aW9ucy13aWR0aDtcbiAgbWFyZ2luOiAkc3dhbDItYWN0aW9ucy1tYXJnaW47XG5cbiAgJjpub3QoLnN3YWwyLWxvYWRpbmcpIHtcbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4taG92ZXIsICRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlLCAkc3dhbDItYnV0dG9uLWRhcmtlbi1hY3RpdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItbG9hZGluZyB7XG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIG1hcmdpbjogLjQ2ODc1ZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItY2FuY2VsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6bm90KC5zd2FsMi1zdHlsZWQpIHtcbiAgICAgICYuc3dhbDItY29uZmlybSB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRlbigkc3dhbDItYmxhY2ssIDYwKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAkc3dhbDItd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXN0eWxlZCB7XG4gIG1hcmdpbjogLjMxMjVlbTtcbiAgcGFkZGluZzogLjYyNWVtIDJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJi5zd2FsMi1jb25maXJtIHtcbiAgICBib3JkZXI6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItY29uZmlybS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWZvbnQtc2l6ZTtcbiAgfVxuXG4gICYuc3dhbDItY2FuY2VsIHtcbiAgICBib3JkZXI6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogJHN3YWwyLWNhbmNlbC1idXR0b24tY29sb3I7XG4gICAgZm9udC1zaXplOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1mb250LXNpemU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAkc3dhbDItYnV0dG9uLWZvY3VzLW91dGxpbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWJ1dHRvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRzd2FsMi1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgfVxuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4uc3dhbDItZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHN3YWwyLWZvb3Rlci1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi1mb290ZXItcGFkZGluZztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRzd2FsMi1mb290ZXItYm9yZGVyLWNvbG9yO1xuICBjb2xvcjogJHN3YWwyLWZvb3Rlci1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9vdGVyLWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWhlaWdodDtcbiAgYmFja2dyb3VuZDogJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kO1xufVxuXG4uc3dhbDItaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogJHN3YWwyLWltYWdlLW1hcmdpbjtcbn1cblxuLnN3YWwyLWNsb3NlIHtcbiAgcG9zaXRpb246ICRzd2FsMi1jbG9zZS1idXR0b24tcG9zaXRpb247XG4gIHotaW5kZXg6IDI7XG5cbiAgLyogMTYxNyAqL1xuICB0b3A6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICByaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogJHN3YWwyLWNsb3NlLWJ1dHRvbi13aWR0aDtcbiAgaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uO1xuICBib3JkZXI6ICRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gIG91dGxpbmU6ICRzd2FsMi1jbG9zZS1idXR0b24tb3V0bGluZTtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I7XG4gIH1cblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLnN3YWwyLWNvbnRlbnQge1xuICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIG92ZXJsYXBwaW5nIHRoZSBjb250ZW50XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50O1xuICBtYXJnaW46ICRzd2FsMi1jb250ZW50LW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRlbnQtcGFkaW5nO1xuICBjb2xvcjogJHN3YWwyLWNvbnRlbnQtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNvbnRlbnQtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJHN3YWwyLWNvbnRlbnQtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY29udGVudC1saW5lLWhlaWdodDtcbiAgdGV4dC1hbGlnbjogJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjtcbiAgd29yZC13cmFwOiAkc3dhbDItY29udGVudC13b3JkLXdyYXA7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogJHN3YWwyLWlucHV0LW1hcmdpbjtcbn1cblxuLnN3YWwyLWlucHV0LFxuLnN3YWwyLWZpbGUsXG4uc3dhbDItdGV4dGFyZWEge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogJHN3YWwyLWlucHV0LXdpZHRoO1xuICB0cmFuc2l0aW9uOiAkc3dhbDItaW5wdXQtdHJhbnNpdGlvbjtcbiAgYm9yZGVyOiAkc3dhbDItaW5wdXQtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6ICRzd2FsMi1pbnB1dC1ib3gtc2hhZG93O1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG5cbiAgJi5zd2FsMi1pbnB1dGVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1lcnJvciAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHN3YWwyLWVycm9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI7XG4gICAgb3V0bGluZTogJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU7XG4gICAgYm94LXNoYWRvdzogJHN3YWwyLWlucHV0LWZvY3VzLWJveC1zaGFkb3c7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCk7XG4gIH1cbn1cblxuLnN3YWwyLXJhbmdlIHtcbiAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbWFyZ2luO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItaW5wdXQtYmFja2dyb3VuZDtcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIG91dHB1dCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW5wdXQsXG4gIG91dHB1dCB7XG4gICAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICB9XG59XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogJHN3YWwyLWlucHV0LWhlaWdodDtcbiAgcGFkZGluZzogJHN3YWwyLWlucHV0LXBhZGRpbmc7XG5cbiAgJlt0eXBlPSdudW1iZXInXSB7XG4gICAgbWF4LXdpZHRoOiAxMGVtO1xuICB9XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAkc3dhbDItdGV4dGFyZWEtaGVpZ2h0O1xuICBwYWRkaW5nOiAkc3dhbDItdGV4dGFyZWEtcGFkZGluZztcbn1cblxuLnN3YWwyLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC4zNzVlbSAuNjI1ZW07XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG59XG5cbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItaW5wdXQtYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcblxuICBsYWJlbCB7XG4gICAgbWFyZ2luOiAwIC42ZW07XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbjogMCAuNGVtO1xuICB9XG59XG5cbi5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtanVzdGlmeS1jb250ZW50O1xuICBwYWRkaW5nOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLXBhZGRpbmc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWZvbnQtd2VpZ2h0O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyEnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIG1hcmdpbjogMCAuNjI1ZW07XG4gICAgem9vbTogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLXpvb207XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5zd2FsMi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAkc3dhbDItaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIG1hcmdpbjogJHN3YWwyLWljb24tbWFyZ2luO1xuICB6b29tOiAkc3dhbDItaWNvbi16b29tO1xuICBib3JkZXI6IC4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItaWNvbi1mb250LWZhbWlseTtcbiAgbGluZS1oZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMy43NWVtO1xuICB9XG5cbiAgJi5zd2FsMi1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItZXJyb3I7XG4gICAgY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIuMzEyNWVtO1xuICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWVycm9yO1xuXG4gICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgbGVmdDogMS4wNjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICByaWdodDogMWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVycm9yIGljb24gYW5pbWF0aW9uXG4gICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgQGlmICRzd2FsMi1pY29uLWFuaW1hdGlvbnMge1xuICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7XG5cbiAgICAgICAgLnN3YWwyLXgtbWFyayB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLXdhcm5pbmcge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkc3dhbDItd2FybmluZywgNyk7XG4gICAgY29sb3I6ICRzd2FsMi13YXJuaW5nO1xuICB9XG5cbiAgJi5zd2FsMi1pbmZvIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWluZm8sIDIwKTtcbiAgICBjb2xvcjogJHN3YWwyLWluZm87XG4gIH1cblxuICAmLnN3YWwyLXF1ZXN0aW9uIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLXF1ZXN0aW9uLCAyMCk7XG4gICAgY29sb3I6ICRzd2FsMi1xdWVzdGlvbjtcbiAgfVxuXG4gICYuc3dhbDItc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcbiAgICBjb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG5cbiAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XG4gICAgICAvLyBFbXVsYXRlIG1vdmluZyBjaXJjdWxhciBsaW5lXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMy43NWVtO1xuICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIHRvcDogLS40Mzc1ZW07XG4gICAgICAgIGxlZnQ6IC0yLjA2MzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMy43NWVtIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHRvcDogLS42ODc1ZW07XG4gICAgICAgIGxlZnQ6IDEuODc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAvLyBSaW5nXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdG9wOiAtLjI1ZW07XG4gICAgICBsZWZ0OiAtLjI1ZW07XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiAuMjVlbSBzb2xpZCAkc3dhbDItc3VjY2Vzcy1ib3JkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgIC8vIEhpZGUgY29ybmVycyBsZWZ0IGZyb20gYW5pbWF0aW9uXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdG9wOiAuNWVtO1xuICAgICAgbGVmdDogMS42MjVlbTtcbiAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgaGVpZ2h0OiA1LjYyNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG5cbiAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItc3VjY2VzcztcblxuICAgICAgJltjbGFzcyQ9J3RpcCddIHtcbiAgICAgICAgdG9wOiAyLjg3NWVtO1xuICAgICAgICBsZWZ0OiAuODc1ZW07XG4gICAgICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgdG9wOiAyLjM3NWVtO1xuICAgICAgICByaWdodDogLjVlbTtcbiAgICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN1Y2Nlc3MgaWNvbiBhbmltYXRpb25cbiAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICBAaWYgJHN3YWwyLWljb24tYW5pbWF0aW9ucyB7XG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHQge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLXBhZGRpbmc7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1iYWNrZ3JvdW5kO1xuICBmb250LXdlaWdodDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWZvbnQtd2VpZ2h0O1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHdpZHRoOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC13aWR0aDtcbiAgICBoZWlnaHQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItYWN0aXZlLXN0ZXAtY29sb3I7XG4gICAgbGluZS1oZWlnaHQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWhlaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIHtcbiAgICAgIGJhY2tncm91bmQ6ICRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kO1xuXG4gICAgICB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZGlzdGFuY2U7XG4gICAgaGVpZ2h0OiAuNGVtO1xuICAgIG1hcmdpbjogMCAtMXB4O1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi1hY3RpdmUtc3RlcC1iYWNrZ3JvdW5kO1xuICB9XG59XG5cbi8vIGdpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI2OFxuW2NsYXNzXj0nc3dhbDInXSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zd2FsMi1zaG93IHtcbiAgYW5pbWF0aW9uOiAkc3dhbDItc2hvdy1hbmltYXRpb247XG59XG5cbi5zd2FsMi1oaWRlIHtcbiAgYW5pbWF0aW9uOiAkc3dhbDItaGlkZS1hbmltYXRpb247XG59XG5cbi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi8vIFJpZ2h0LXRvLWxlZnQgc3VwcG9ydFxuLnN3YWwyLXJ0bCB7XG4gIC5zd2FsMi1jbG9zZSB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gIH1cblxuICAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyIHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG4iLCIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMC42MjVlbSAjZDlkOWQ5OyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAwIDAuNmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVyIHtcbiAgICBtYXJnaW46IDAuNWVtIDAgMDtcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDA7XG4gICAgZm9udC1zaXplOiAwLjhlbTsgfVxuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAwLjhlbTtcbiAgICBoZWlnaHQ6IDAuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg7IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcbiAgICB3aWR0aDogMmVtO1xuICAgIG1pbi13aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIG1hcmdpbjogMDsgfVxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gICAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgICAgICAgZm9udC1zaXplOiAuMjVlbTsgfSB9XG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICB3aWR0aDogMmVtO1xuICAgICAgaGVpZ2h0OiAyZW07IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICB0b3A6IC44NzVlbTtcbiAgICAgIHdpZHRoOiAxLjM3NWVtOyB9XG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIGxlZnQ6IC4zMTI1ZW07IH1cbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHJpZ2h0OiAuMzEyNWVtOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XG4gICAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgLjMxMjVlbTsgfVxuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZCB7XG4gICAgbWFyZ2luOiAwIC4zMTI1ZW07XG4gICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZDpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjA2MjVlbSAjZmZmLCAwIDAgMCAwLjEyNWVtIHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2OyB9XG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxLjZlbTtcbiAgICAgIGhlaWdodDogM2VtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ11bY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICB0b3A6IC0uOGVtO1xuICAgICAgICBsZWZ0OiAtLjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07IH1cbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgbGVmdDogLjkzNzVlbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxLjVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICB3aWR0aDogMmVtO1xuICAgICAgaGVpZ2h0OiAyZW07IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IC40Mzc1ZW07XG4gICAgICB3aWR0aDogLjQzNzVlbTtcbiAgICAgIGhlaWdodDogMi42ODc1ZW07IH1cbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xuICAgICAgaGVpZ2h0OiAuMzEyNWVtOyB9XG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSd0aXAnXSB7XG4gICAgICAgIHRvcDogMS4xMjVlbTtcbiAgICAgICAgbGVmdDogLjE4NzVlbTtcbiAgICAgICAgd2lkdGg6IC43NWVtOyB9XG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICB0b3A6IC45Mzc1ZW07XG4gICAgICAgIHJpZ2h0OiAuMTg3NWVtO1xuICAgICAgICB3aWR0aDogMS4zNzVlbTsgfVxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xuICAgICAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1czsgfVxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgICAgIGFuaW1hdGlvbjogc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzOyB9XG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1zaG93IHtcbiAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LXNob3cgMC41czsgfVxuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItaGlkZSB7XG4gICAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1oaWRlIDAuMXMgZm9yd2FyZHM7IH1cblxuLnN3YWwyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3cge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLWhpZGUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20gPiA6Zmlyc3QtY2hpbGQsXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0ID4gOmZpcnN0LWNoaWxkLFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0ID4gOmZpcnN0LWNoaWxkLFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQgPiA6Zmlyc3QtY2hpbGQsXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0ID4gOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuID4gLnN3YWwyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXIsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXJpZ2h0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuc3dhbDItY29udGFpbmVyOm5vdCguc3dhbDItdG9wKTpub3QoLnN3YWwyLXRvcC1zdGFydCk6bm90KC5zd2FsMi10b3AtZW5kKTpub3QoLnN3YWwyLXRvcC1sZWZ0KTpub3QoLnN3YWwyLXRvcC1yaWdodCk6bm90KC5zd2FsMi1jZW50ZXItc3RhcnQpOm5vdCguc3dhbDItY2VudGVyLWVuZCk6bm90KC5zd2FsMi1jZW50ZXItbGVmdCk6bm90KC5zd2FsMi1jZW50ZXItcmlnaHQpOm5vdCguc3dhbDItYm90dG9tKTpub3QoLnN3YWwyLWJvdHRvbS1zdGFydCk6bm90KC5zd2FsMi1ib3R0b20tZW5kKTpub3QoLnN3YWwyLWJvdHRvbS1sZWZ0KTpub3QoLnN3YWwyLWJvdHRvbS1yaWdodCk6bm90KC5zd2FsMi1ncm93LWZ1bGxzY3JlZW4pID4gLnN3YWwyLW1vZGFsIHtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgfSB9XG5cbi5zd2FsMi1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjMxMjVlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuICAuc3dhbDItcG9wdXA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmcge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uc3dhbDItdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMC40ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LXNpemU6IDEuODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuXG4uc3dhbDItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEuMjVlbSBhdXRvIDA7IH1cbiAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogLjQ7IH1cbiAgLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpOyB9XG4gIC5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSk7IH1cbiAgLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgbWFyZ2luOiAuNDY4NzVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAgIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuICAuc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cbiAgLnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyA6bm90KC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5OTk5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZmZmOyB9XG5cbi5zd2FsMi1zdHlsZWQge1xuICBtYXJnaW46IC4zMTI1ZW07XG4gIHBhZGRpbmc6IC42MjVlbSAyZW07XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgLnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm0ge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4NWQ2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4wNjI1ZW07IH1cbiAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4wNjI1ZW07IH1cbiAgLnN3YWwyLXN0eWxlZDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZiwgMCAwIDAgNHB4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpOyB9XG4gIC5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDsgfVxuXG4uc3dhbDItZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMS4yNWVtIDAgMDtcbiAgcGFkZGluZzogMWVtIDAgMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LXNpemU6IDFlbTsgfVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG5cbi5zd2FsMi1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxLjI1ZW0gYXV0bzsgfVxuXG4uc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIC8qIDE2MTcgKi9cbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdXRsaW5lOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5zd2FsMi1jbG9zZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZjI3NDc0OyB9XG4gIC5zd2FsMi1jbG9zZTo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwOyB9XG5cbi5zd2FsMi1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cblxuLnN3YWwyLWlucHV0LFxuLnN3YWwyLWZpbGUsXG4uc3dhbDItdGV4dGFyZWEsXG4uc3dhbDItc2VsZWN0LFxuLnN3YWwyLXJhZGlvLFxuLnN3YWwyLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAxZW0gYXV0bzsgfVxuXG4uc3dhbDItaW5wdXQsXG4uc3dhbDItZmlsZSxcbi5zd2FsMi10ZXh0YXJlYSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiAwLjE4NzVlbTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMTI1ZW07IH1cbiAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsXG4gIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsXG4gIC5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICNmMjc0NzQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudDsgfVxuICAuc3dhbDItaW5wdXQ6Zm9jdXMsXG4gIC5zd2FsMi1maWxlOmZvY3VzLFxuICAuc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7IH1cbiAgLnN3YWwyLWlucHV0OjpwbGFjZWhvbGRlcixcbiAgLnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLFxuICAuc3dhbDItdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjY2NjYzsgfVxuXG4uc3dhbDItcmFuZ2Uge1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0OyB9XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDgwJTsgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCxcbiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gICAgaGVpZ2h0OiAyLjYyNWVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjYyNWVtOyB9XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogMi42MjVlbTtcbiAgcGFkZGluZzogMCAwLjc1ZW07IH1cbiAgLnN3YWwyLWlucHV0W3R5cGU9J251bWJlciddIHtcbiAgICBtYXgtd2lkdGg6IDEwZW07IH1cblxuLnN3YWwyLWZpbGUge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMTI1ZW07IH1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiA2Ljc1ZW07XG4gIHBhZGRpbmc6IDAuNzVlbTsgfVxuXG4uc3dhbDItc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogLjM3NWVtIC42MjVlbTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxuXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7IH1cbiAgLnN3YWwyLXJhZGlvIGxhYmVsLFxuICAuc3dhbDItY2hlY2tib3ggbGFiZWwge1xuICAgIG1hcmdpbjogMCAuNmVtO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTsgfVxuICAuc3dhbDItcmFkaW8gaW5wdXQsXG4gIC5zd2FsMi1jaGVja2JveCBpbnB1dCB7XG4gICAgbWFyZ2luOiAwIC40ZW07IH1cblxuLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjYyNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnISc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAwIC42MjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnN3YWwyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbTtcbiAgYm9yZGVyOiAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDVlbTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuICAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzLjc1ZW07IH1cbiAgLnN3YWwyLWljb24uc3dhbDItZXJyb3Ige1xuICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NDtcbiAgICBjb2xvcjogI2YyNzQ3NDsgfVxuICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxOyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMi4zMTI1ZW07XG4gICAgICB3aWR0aDogMi45Mzc1ZW07XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3NDc0OyB9XG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgbGVmdDogMS4wNjI1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxuICAgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICByaWdodDogMWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IHtcbiAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41czsgfVxuICAgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmsge1xuICAgICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41czsgfVxuICAuc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6ICNmYWNlYTg7XG4gICAgY29sb3I6ICNmOGJiODY7IH1cbiAgLnN3YWwyLWljb24uc3dhbDItaW5mbyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOWRlMGY2O1xuICAgIGNvbG9yOiAjM2ZjM2VlOyB9XG4gIC5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9uIHtcbiAgICBib3JkZXItY29sb3I6ICNjOWRhZTE7XG4gICAgY29sb3I6ICM4N2FkYmQ7IH1cbiAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2O1xuICAgIGNvbG9yOiAjYTVkYzg2OyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMy43NWVtO1xuICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIHRvcDogLS40Mzc1ZW07XG4gICAgICAgIGxlZnQ6IC0yLjA2MzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMy43NWVtIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41ZW0gMCAwIDcuNWVtOyB9XG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgIHRvcDogLS42ODc1ZW07XG4gICAgICAgIGxlZnQ6IDEuODc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7IH1cbiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHRvcDogLS4yNWVtO1xuICAgICAgbGVmdDogLS4yNWVtO1xuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogMC4yNWVtIHNvbGlkIHJnYmEoMTY1LCAyMjAsIDEzNCwgMC4zKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0b3A6IC41ZW07XG4gICAgICBsZWZ0OiAxLjYyNWVtO1xuICAgICAgd2lkdGg6IC40Mzc1ZW07XG4gICAgICBoZWlnaHQ6IDUuNjI1ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBoZWlnaHQ6IC4zMTI1ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAuMTI1ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYzg2OyB9XG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICB0b3A6IDIuODc1ZW07XG4gICAgICAgIGxlZnQ6IC44NzVlbTtcbiAgICAgICAgd2lkdGg6IDEuNTYyNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICB0b3A6IDIuMzc1ZW07XG4gICAgICAgIHJpZ2h0OiAuNWVtO1xuICAgICAgICB3aWR0aDogMi45Mzc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cbiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzOyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzOyB9XG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodCB7XG4gICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjsgfVxuXG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAxLjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgYmFja2dyb3VuZDogIzMwODVkNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2OyB9XG4gICAgICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhZGQ4ZTY7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAgfiAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxuICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZSB7XG4gICAgei1pbmRleDogMTA7XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGhlaWdodDogLjRlbTtcbiAgICBtYXJnaW46IDAgLTFweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2OyB9XG5cbltjbGFzc149J3N3YWwyJ10ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5zd2FsMi1zaG93IHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1zaG93IDAuM3M7IH1cblxuLnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246IHN3YWwyLWhpZGUgMC4xNXMgZm9yd2FyZHM7IH1cblxuLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTsgfVxuXG4uc3dhbDItcnRsIC5zd2FsMi1jbG9zZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwOyB9XG5cbi5zd2FsMi1ydGwgLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvOyB9XG5cbkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4gIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuc3dhbDItY2xvc2U6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTsgfSB9XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyk7IH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7IH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogLjU2MjVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDU0JSB7XG4gICAgdG9wOiAuMTI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDcwJSB7XG4gICAgdG9wOiAuNjI1ZW07XG4gICAgbGVmdDogLS4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtOyB9XG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuNzVlbTtcbiAgICB3aWR0aDogLjVlbTsgfVxuICAxMDAlIHtcbiAgICB0b3A6IDEuMTI1ZW07XG4gICAgbGVmdDogLjE4NzVlbTtcbiAgICB3aWR0aDogLjc1ZW07IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IC45Mzc1ZW07XG4gICAgd2lkdGg6IDA7IH1cbiAgODQlIHtcbiAgICB0b3A6IC45Mzc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEuMTI1ZW07IH1cbiAgMTAwJSB7XG4gICAgdG9wOiAuOTM3NWVtO1xuICAgIHJpZ2h0OiAuMTg3NWVtO1xuICAgIHdpZHRoOiAxLjM3NWVtOyB9IH1cblxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTsgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWhpZGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAge1xuICAwJSB7XG4gICAgdG9wOiAxLjE4NzVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwOyB9XG4gIDU0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuMTI1ZW07XG4gICAgd2lkdGg6IDA7IH1cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0uMzc1ZW07XG4gICAgd2lkdGg6IDMuMTI1ZW07IH1cbiAgODQlIHtcbiAgICB0b3A6IDNlbTtcbiAgICBsZWZ0OiAxLjMxMjVlbTtcbiAgICB3aWR0aDogMS4wNjI1ZW07IH1cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjgxMjVlbTtcbiAgICBsZWZ0OiAuODc1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtOyB9IH1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDsgfVxuICA2NSUge1xuICAgIHRvcDogMy4zNzVlbTtcbiAgICByaWdodDogMi44NzVlbTtcbiAgICB3aWR0aDogMDsgfVxuICA4NCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMuNDM3NWVtOyB9XG4gIDEwMCUge1xuICAgIHRvcDogMi4zNzVlbTtcbiAgICByaWdodDogLjVlbTtcbiAgICB3aWR0aDogMi45Mzc1ZW07IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxuICA1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxuICAxMiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayB7XG4gIDAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gICAgb3BhY2l0eTogMDsgfVxuICA4MCUge1xuICAgIG1hcmdpbi10b3A6IC0uMzc1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG5ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG5ib2R5LnN3YWwyLWhlaWdodC1hdXRvIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDAuNjI1ZW0gKiAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgPiAuc3dhbDItbW9kYWwge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7IH1cbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwOyB9XG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7IH1cbiAgICBib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pID4gW2FyaWEtaGlkZGVuPSd0cnVlJ10ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7IH0gfVxuXG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IGF1dG87XG4gICAgbGVmdDogYXV0bzsgfVxuICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IGF1dG87XG4gICAgbGVmdDogMDsgfVxuICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuICBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IGF1dG87XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICB0b3A6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICB0b3A6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IGF1dG87IH1cblxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25zIHtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgaGVpZ2h0OiAyLjJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMzEyNWVtOyB9XG4gIGJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgbWFyZ2luOiAuMzEyNWVtIGF1dG87XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4iLCJAaW1wb3J0ICcuLi92YXJpYWJsZXMnO1xuXG4vLyBNaWNyb3NvZnQgRWRnZVxuQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6IHRydWUpIHtcbiAgLnN3YWwyLXJhbmdlIHtcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIG91dHB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJRTExXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxuICAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItcmFuZ2Uge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgb3V0cHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIEZpcmVmb3hcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gIC5zd2FsMi1jbG9zZSB7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgJHN3YWwyLW91dGxpbmUtY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIvLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gIH1cblxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcbiAgfVxuXG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IC41NjI1ZW07XG4gICAgbGVmdDogLjA2MjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDU0JSB7XG4gICAgdG9wOiAuMTI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0b3A6IC42MjVlbTtcbiAgICBsZWZ0OiAtLjI1ZW07XG4gICAgd2lkdGg6IDEuNjI1ZW07XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMS4wNjI1ZW07XG4gICAgbGVmdDogLjc1ZW07XG4gICAgd2lkdGg6IC41ZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICB0b3A6IDEuMTI1ZW07XG4gICAgbGVmdDogLjE4NzVlbTtcbiAgICB3aWR0aDogLjc1ZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgMCUge1xuICAgIHRvcDogMS42MjVlbTtcbiAgICByaWdodDogMS4zNzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IC45Mzc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogLjkzNzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMS4xMjVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogLjkzNzVlbTtcbiAgICByaWdodDogLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTtcbiAgfVxufVxuIiwiQGltcG9ydCAndG9hc3RzLWFuaW1hdGlvbnMnO1xuXG4vLyBBcHBlYXJhbmNlIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICB9XG5cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi8vIERpc3BwZWFyYW5jZSBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi8vIFN1Y2Nlc3MgaWNvbiBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XG4gIDAlIHtcbiAgICB0b3A6IDEuMTg3NWVtO1xuICAgIGxlZnQ6IC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA1NCUge1xuICAgIHRvcDogMS4wNjI1ZW07XG4gICAgbGVmdDogLjEyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0uMzc1ZW07XG4gICAgd2lkdGg6IDMuMTI1ZW07XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogM2VtO1xuICAgIGxlZnQ6IDEuMzEyNWVtO1xuICAgIHdpZHRoOiAxLjA2MjVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogMi44MTI1ZW07XG4gICAgbGVmdDogLjg3NWVtO1xuICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0b3A6IDMuMzc1ZW07XG4gICAgcmlnaHQ6IDIuODc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMuNDM3NWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xuICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgMTIlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG59XG5cbi8vIEVycm9yIGljb24gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayB7XG4gIDAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDgwJSB7XG4gICAgbWFyZ2luLXRvcDogLS4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iLCIvLyBTd2VldEFsZXJ0MlxuLy8gZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0MlxuXG5AaW1wb3J0ICdzY3NzL3RoZW1pbmcnO1xuQGltcG9ydCAnc2Nzcy9wb2x5ZmlsbHMnO1xuQGltcG9ydCAnc2Nzcy9hbmltYXRpb25zJztcblxuYm9keSB7XG4gIEBpbmNsdWRlIHN3ZWV0YWxlcnQyLWJvZHkoKTtcbiAgQGluY2x1ZGUgc3dlZXRhbGVydDItdG9hc3RzLWJvZHkoKTtcbn1cbiIsIkBpbXBvcnQgJ3RvYXN0cy1ib2R5JztcblxuQG1peGluIHN3ZWV0YWxlcnQyLWJvZHkoKSB7XG4gICYuc3dhbDItc2hvd24ge1xuICAgIEBpbmNsdWRlIG5vdCgnLnN3YWwyLW5vLWJhY2tkcm9wJywgJy5zd2FsMi10b2FzdC1zaG93bicpIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIG5vdCBvdmVyZmxvdy15IGJlY2F1c2Ugb2YgU2FyYXJpLCAjMTI1M1xuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItaGVpZ2h0LWF1dG8ge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyAvLyAjNzgxICMxMTA3XG4gIH1cblxuICAmLnN3YWwyLW5vLWJhY2tkcm9wIHtcbiAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gI3skc3dhbDItY29udGFpbmVyLXBhZGRpbmd9ICogMik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJHN3YWwyLWJhY2tkcm9wO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlciB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAgICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgJi5zd2FsMi1zaG93biB7XG4gICAgICBAaW5jbHVkZSBub3QoJy5zd2FsMi1uby1iYWNrZHJvcCcsICcuc3dhbDItdG9hc3Qtc2hvd24nKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuXG4gICAgICAgID4gW2FyaWEtaGlkZGVuPSd0cnVlJ10ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBzd2VldGFsZXJ0Mi10b2FzdHMtYm9keSgpIHtcbiAgJi5zd2FsMi10b2FzdC1zaG93biB7XG4gICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgJi5zd2FsMi10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1lbmQsXG4gICAgICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgICAmLnN3YWwyLXRvcC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1zdGFydCxcbiAgICAgICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlciB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20ge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLXRvYXN0LWNvbHVtbiB7XG4gICAgLnN3YWwyLXRvYXN0IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuMzEyNWVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItbG9hZGluZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgbWFyZ2luOiAuMzEyNWVtIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWlucHV0LWZvbnQtc2l6ZTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LXZhbGlkYXRpb24tZm9udC1zaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/join-group/join-group.module.ts":
/*!*************************************************!*\
  !*** ./src/app/join-group/join-group.module.ts ***!
  \*************************************************/
/*! exports provided: JoinGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGroupPageModule", function() { return JoinGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _join_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join-group.page */ "./src/app/join-group/join-group.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _join_group_page__WEBPACK_IMPORTED_MODULE_6__["JoinGroupPage"]
    }
];
var JoinGroupPageModule = /** @class */ (function () {
    function JoinGroupPageModule() {
    }
    JoinGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_join_group_page__WEBPACK_IMPORTED_MODULE_6__["JoinGroupPage"]]
        })
    ], JoinGroupPageModule);
    return JoinGroupPageModule;
}());



/***/ }),

/***/ "./src/app/join-group/join-group.page.scss":
/*!*************************************************!*\
  !*** ./src/app/join-group/join-group.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: left; }\n\n.back-button {\n  font-size: 25px; }\n\nion-label {\n  margin-bottom: 0; }\n\n.chat-item {\n  border-bottom: 1px solid #E2E2E2; }\n\n.unread {\n  border: none; }\n\n.right {\n  margin-left: -10px; }\n\n.group-name {\n  color: #4B4A5E;\n  font-weight: bold; }\n\n.group-icon {\n  border-radius: 50%; }\n\n.group-message {\n  color: #4B4A5E;\n  font-weight: 400;\n  margin-top: 5px; }\n\n.message-time-container {\n  text-align: right; }\n\n.message-time {\n  color: #005DDD;\n  font-size: 14px; }\n\n.message-badge-container {\n  text-align: right; }\n\n.approve-button {\n  margin: 2px 5px;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvYmJveF9mcm9udGVuZC9zcmMvYXBwL2pvaW4tZ3JvdXAvam9pbi1ncm91cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFjLEVBQUE7O0FBS2xCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2pvaW4tZ3JvdXAvam9pbi1ncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgU3R5bGVzXG5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJhY2stYnV0dG9ue1xuICAgIGZvbnQtc2l6ZToyNXB4O1xufVxuXG4vL0dyb3VwIFN0eWxlc1xuXG5pb24tbGFiZWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNoYXQtaXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UyRTJFMjtcbn1cblxuLnVucmVhZHtcbiAgICBib3JkZXI6bm9uZTtcbn1cblxuLnJpZ2h0e1xuICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xufVxuXG4uZ3JvdXAtbmFtZXtcbiAgICBjb2xvcjogIzRCNEE1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdyb3VwLWljb257XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZ3JvdXAtbWVzc2FnZXtcbiAgICBjb2xvcjogIzRCNEE1RTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi10b3A6NXB4O1xufVxuXG4ubWVzc2FnZS10aW1lLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lc3NhZ2UtdGltZXtcbiAgICBjb2xvcjogIzAwNURERDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZXNzYWdlLWJhZGdlLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFwcHJvdmUtYnV0dG9ue1xuICAgIG1hcmdpbjoycHggNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/join-group/join-group.page.ts":
/*!***********************************************!*\
  !*** ./src/app/join-group/join-group.page.ts ***!
  \***********************************************/
/*! exports provided: JoinGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGroupPage", function() { return JoinGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/group.service */ "./src/app/shared/group.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");








var JoinGroupPage = /** @class */ (function () {
    function JoinGroupPage(groupService, storage, router, loader) {
        var _this = this;
        this.groupService = groupService;
        this.storage = storage;
        this.router = router;
        this.loader = loader;
        this.userArray = [];
        this.idval = "";
        this.storage.get('id').then(function (val) {
            _this.idval = val;
            console.log(val);
            _this.getgroupuser(val);
            console.log(val);
        });
    }
    JoinGroupPage.prototype.ngOnInit = function () {
    };
    JoinGroupPage.prototype.joinGroup = function () {
        this.router.navigate(['join-group']);
    };
    JoinGroupPage.prototype.createGroup = function () {
        this.router.navigate(['create-group']);
    };
    JoinGroupPage.prototype.getgroupuser = function (val) {
        var _this = this;
        this.loader.presentLoading();
        this.groupService.getusergroup(val).subscribe(function (res) {
            _this.loader.dismiss();
            console.log(res);
            _this.userArray = new Array();
            // this.groupService.selectedGroup = res as Group;
            var groups = res;
            groups.forEach(function (element) {
                //   this.groupService.getusergroupname(element['groupid']).subscribe((res) => {
                _this.userArray.push({ id: element['_id'], name: element['name'], avatar: element['avatar'], members: element['members'] });
            });
        });
    };
    JoinGroupPage.prototype.onAccept = function (gid) {
        var _this = this;
        console.log(gid);
        var postdata = {
            "id": gid,
            "mid": this.idval
        };
        console.log(postdata);
        this.groupService.acceptgroup(postdata).subscribe(function (res) {
            console.log("RESULT", res);
            _this.userArray = [];
            _this.storage.get('id').then(function (val) {
                _this.getgroupuser(val);
            });
        });
    };
    JoinGroupPage.prototype.onDelete = function (id) {
        var _this = this;
        var postdata = {
            "mid": this.idval
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(_this.groupService.deleteGroup(id, postdata).subscribe(function (res) {
                    _this.storage.get('id').then(function (val) {
                        _this.getgroupuser(val);
                    });
                    'Deleted!';
                }));
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled');
            }
        });
    };
    JoinGroupPage.ctorParameters = function () { return [
        { type: _shared_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    JoinGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join-group',
            template: __webpack_require__(/*! raw-loader!./join-group.page.html */ "./node_modules/raw-loader/index.js!./src/app/join-group/join-group.page.html"),
            providers: [_shared_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]],
            styles: [__webpack_require__(/*! ./join-group.page.scss */ "./src/app/join-group/join-group.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], JoinGroupPage);
    return JoinGroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=join-group-join-group-module-es5.js.map