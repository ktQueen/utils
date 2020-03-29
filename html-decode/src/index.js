/**
 * @module
 * @name html-decode
 * @description html转码
 * @author kt
 * @since 2018-12-18
 *
 * @param {string} str -传入需要转码的字符串
 * @return {string}  newStr -转码之后的字符串
 * @example
 *  var htmlDecode = require('@fe/utils/html-decode');
 *  或
 *  import htmlDecode from '@fe/utils/html-decode';
 *  console.log(htmlDecode('123&lt;'));
 *  ======》123<
 */

const dataType = require('../../data-type');

module.exports = (str) => {
    if (dataType(str) !== 'string') return;
    let s = '';
    if (str.length === 0) return '';
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt;/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, '\'');
    s = s.replace(/&quot;/g, '"');
    return s;
};
