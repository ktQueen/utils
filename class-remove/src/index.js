/**
 * @module
 * @name class-remove
 * @description 为元素移除class
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param  {HTMLElement} ele 当前元素
 * @param  {String} cls className名
 * @example
 *  var removeClass = require('front-end-utils/class-remove');
 *  或
 *  import removeClass from 'front-end-utils/class-remove';
 *  removeClass(document.getElementById('demo),'demo123');
 */
const hasClass = require('../../class-has');

module.exports = (ele, cls) => {
    // 判断参数是否有值
    if (ele && cls) {
        if (hasClass(ele, cls)) {
            const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }
};
