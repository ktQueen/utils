/**
 * @module
 * @name debounce
 * @description 防抖
 * @author kt
 * @since 2018-12-07
 *
 *
 * @param {function} func 回调函数
 * @param {number} wait 等待时间
 * @param {boolean} immediate 是否立即执行
 * @return {function} 函数
 * @example
 *  var debounce = require('front-end-utils/debounce');
 *  或
 *  import debounce from 'front-end-utils/debounce';
 *  var consoleFn = function(){console.log(1);};// 无防抖函数
 *  var consoleDebounceFn = debounce(function(){console.log(1);},300,false);// 防抖函数
 */
module.exports = (func, wait, immediate) => {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
