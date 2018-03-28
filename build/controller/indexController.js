'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModel = require('../models/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var indexController = {
    index: function index() {
        var _this = this;

        return function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!ctx.request.header['x-pjax']) {
                                    _context.next = 4;
                                    break;
                                }

                                ctx.body = '<x-praise class="x-tag"></x-praise>';
                                _context.next = 7;
                                break;

                            case 4:
                                _context.next = 6;
                                return ctx.render('index.html', function () {
                                    title: '大拇指点赞';
                                });

                            case 6:
                                ctx.body = _context.sent;

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    },
    star: function star() {
        var _this2 = this;

        return function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!ctx.request.header['x-pjax']) {
                                    _context2.next = 4;
                                    break;
                                }

                                ctx.body = '<x-star class="x-tag"></x-star>';
                                _context2.next = 7;
                                break;

                            case 4:
                                _context2.next = 6;
                                return ctx.render('star.html', function () {
                                    title: '星星点赞';
                                });

                            case 6:
                                ctx.body = _context2.sent;

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }();
    },
    update: function update() {
        var _this3 = this;

        return function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
                var indexM;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                indexM = new _indexModel2.default(ctx);
                                _context3.next = 3;
                                return indexM.updateNum();

                            case 3:
                                ctx.body = _context3.sent;

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this3);
            }));

            return function (_x5, _x6) {
                return _ref3.apply(this, arguments);
            };
        }();
    }
};
// 导出该方法给 initController.js 文件使用
exports.default = indexController;