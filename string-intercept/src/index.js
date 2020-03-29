/**
 * @module
 * @name string-intercept
 * @description 取字符串的第index的字符
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {string} source 字符串
 * @param {number} index 位置
 * @returns {string} indexStr index位置的字符串
 * @example
 *  var stringIntercept = require('@fe/utils/string-intercept');
 *  或
 *  import stringIntercept from '@fe/utils/string-intercept';
 *  console.log(stringIntercept('hello world',1));
 *  ======》e
 */
const dataType = require('../../data-type');

module.exports = (source, index) => {
    if (dataType(source) !== 'string') return;
    if (dataType(index) !== 'number') return;
    return source.charAt(index);
};
