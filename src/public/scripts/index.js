import Thumb from './thumb'
import './tag.js'
import '../css/index.css'
// add(进行单元测试的)直接挂载在window上，function传入num函数，且return num + 1，相当于点赞数的累积。
window.Thumb = Thumb;
window.add = function (num) {
  return num + 1
}
function callBack() {
    var f = new $.thumb(0, $('#thumb'));
    f.clickAction();
}
$.extend({
    thumb: Thumb
});
callBack();
