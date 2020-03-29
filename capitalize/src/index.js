/**
 * @module
 * @name capitalize
 * @description 首字母大写
 * @author kt
 * @since 2019-01-05
 *
 *
 * @param {string} str 英文字母
 * @return {string} newStr 首字母大写的英文字母
 * @example
 *  var capitalize = require('@fe/utils/capitalize');
 *  或
 *  import capitalize from '@fe/utils/capitalize';
 *  console.log(capitalize('hello'));
 *  ======》Hello
 */

const dataType = require('../../data-type');

module.exports = (str) => {
    if (dataType(str) !== 'string') return '';
    return str.substring(0, 1).toUpperCase() + str.substring(1);
};
