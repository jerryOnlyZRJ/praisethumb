webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _thumb = __webpack_require__(1);

var _thumb2 = _interopRequireDefault(_thumb);

__webpack_require__(2);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add(进行单元测试的)直接挂载在window上，function传入num函数，且return num + 1，相当于点赞数的累积。
window.Thumb = _thumb2.default;
window.add = function (num) {
    return num + 1;
};
function callBack() {
    var f = new $.thumb(0, $('#thumb'));
    f.clickAction();
}
$.extend({
    thumb: _thumb2.default
});
callBack();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = '';

var PraiseButton = function () {
  function PraiseButton(num, element) {
    _classCallCheck(this, PraiseButton);

    this.num = num;
    this.element = element;
  }

  _createClass(PraiseButton, [{
    key: 'clickAction',
    value: function clickAction() {
      var _this = this;

      this.element.click(function () {
        // 判断事件是否已经存在，如果存在便会将其清除掉，所以点击只会执行最后一次点击的那次事件
        if (f) {
          clearTimeout(f);
        }
        f = setTimeout(function () {
          if (_this.num < 10) {
            _this.element.css('-webkit-filter', 'grayscale(0)');
            $('#animation').addClass('num');
            _this.num = add(_this.num);
            setTimeout(function () {
              $('#animation').removeClass('num');
            }, 1000);
            axios.get('/index/update').then(function (response) {
              console.log(response);
            }).catch(function (error) {
              console.log(error);
            });
          } else {
            _this.element.css('-webkit-filter', 'grayscale(1)');
            _this.num = 0;
          }
          console.log(_this.num);
        }, 800);
      });
    }
  }]);

  return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(num, element) {
    _classCallCheck(this, Thumb);

    return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
  }

  return Thumb;
}(PraiseButton);

exports.default = Thumb;
// let  f = new Thumb(0,$('#thumb'));
// f.clickAction();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger thumb"></div>\n    <div class="arm"></div>\n    </div>\n    <span class="hide" id="animation">+1</span>'
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);