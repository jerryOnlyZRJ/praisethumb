webpackJsonp([0],[
/* 0 */
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
    function PraiseButton() {
        _classCallCheck(this, PraiseButton);
    }

    _createClass(PraiseButton, [{
        key: 'clickAction',
        value: function clickAction() {
            axios.get('/index/update').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb() {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));
    }

    return Thumb;
}(PraiseButton);

var Star = function (_PraiseButton2) {
    _inherits(Star, _PraiseButton2);

    function Star() {
        _classCallCheck(this, Star);

        return _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this));
    }

    return Star;
}(PraiseButton);

exports.Thumb = Thumb;
exports.Star = Star;
// let  f = new Thumb(0,$('#thumb'));
// f.clickAction();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

// add(进行单元测试的)直接挂载在window上，function传入num函数，且return num + 1，相当于点赞数的累积。
window.add = function (num) {
  return num + 1;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _thumb = __webpack_require__(0);

var f = new _thumb.Thumb();
xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger thumb"></div>\n    <div class="arm"></div>\n    </div>\n    <span class="hide" id="animation">+1</span>',
    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction();
            var animation = _this.querySelector("#animation");
            animation.className = "hide num";
            setTimeout(function () {
                animation.className = "hide";
            }, 800);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.target.id == "thumb") {
                var t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _thumb = __webpack_require__(0);

var f = new _thumb.Star();
xtag.register('x-star', {
    content: '<div class=\'star\' id=\'star\' >\n    <div class=\'star1\'></div></div>\n    <span class=\'hide\' id=\'animation2\'>+1</span>',
    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction();
            var animation = _this.querySelector("#animation2");
            animation.className = "hide num";
            setTimeout(function () {
                animation.className = "hide";
            }, 800);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.target.id == "star") {
                var t = "";
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);