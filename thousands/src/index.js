/**
 * @module
 * @name thousands
 * @description 千分位处理
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {number} num 数字
 * @returns {string} newNum 前分位数字
 * @example
 *  var thousands = require('front-end-utils/thousands');
 *  或
 *  import thousands from 'front-end-utils/thousands';
 *  console.log(thousands(1000000));
 *  ======》1,000,000.00
 */

module.exports = (num) => {
    if (typeof num !== 'number') return 0;
    return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
};
