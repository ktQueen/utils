/**
 * @module
 * @name class-add
 * @description 为元素添加class
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param  {HTMLElement} ele 当前元素
 * @param  {String} cls className名
 * @example
 *  var addClass = require('front-end-utils/class-add');
 *  或
 *  import addClass from 'front-end-utils/class-add';
 *  addClass(document.getElementById('app'), 'demo123');
 */

const hasClass = require('../../class-has');

module.exports = (ele, cls) => {
    // 判断参数是否有值
    if (ele && cls) {
        if (!hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    }
};
