/**
 * @module
 * @name throttle
 * @description 限流
 * @author kt
 * @since 2018-12-07
 *
 * @param {function} func 回调函数
 * @param {number} delay 延迟时间
 * @return {function} 函数
 * @example
 *  var throttle = require('front-end-utils/throttle');
 *  或
 *  import throttle from 'front-end-utils/throttle';
 *  console.log(throttle(function(){console.log(1);},300));
 */
module.exports = (func, delay) => {
    let timer = null;
    let startTime = Date.now();

    return function(...args) {
        const curTime = Date.now();
        const remaining = delay - (curTime - startTime);
        const context = this;
        // const args = arguments;

        clearTimeout(timer);
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    };
};
