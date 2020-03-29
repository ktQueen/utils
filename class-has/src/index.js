/**
 * @module
 * @name class-has
 * @description 判断元素是否有某个class
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {HTMLElement} ele 当前元素
 * @param {String} cls className名
 * @returns {Boolean} 是否有当前的class
 * @example
 *  var hasClass = require('front-end-utils/class-has');
 *  或
 *  import hasClass from 'front-end-utils/class-has';
 *  console.log(hasClass(document.getElementById('demo),'demo123'));
 *  ========>false
 */
module.exports = (ele, cls) => {
    // 判断参数是否有值
    if (ele && cls) {
        return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
    }
    return false;
};
