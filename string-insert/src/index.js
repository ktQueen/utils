/**
 * @module
 * @name string-insert
 * @description 在字符串中插入新字符串
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {string} soure 源字符
 * @param {number} start 插入字符的位置
 * @param {string} newStr 需要插入的字符
 * @returns {string} 返回新生成的字符
 * @example
 *  var stringInsert = require('front-end-utils/string-insert');
 *  或
 *  import stringInsert from 'front-end-utils/string-insert';
 *  console.log(stringInsert('sadsd',2,'qqqq'));
 *  ======》saqqqqdsd
 */

const dataType = require('../../data-type');

module.exports = (soure, start, newStr) => {
    if (dataType(soure) !== 'string') return;
    if (dataType(start) !== 'number') return;
    if (dataType(newStr) !== 'string') return;
    return soure.slice(0, start) + newStr + soure.slice(start);
};
