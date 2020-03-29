/**
 * @module
 * @name string-del-blank-space
 * @description 删除空白字符串
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {string} str 字符串
 * @returns {string} newStr 无空白字符串的字符串
 * @example
 *  var stringDelBlankSpace = require('front-end-utils/string-del-blank-space');
 *  或
 *  import stringDelBlankSpace from 'front-end-utils/string-del-blank-space';
 *  console.log(stringDelBlankSpace('hello world'));
 *  ======》helloworld
 */

const dataType = require('../../data-type');

module.exports = (str) => {
    if (dataType(str) !== 'string') return;
    str = str.replace(/<\/?[^>]*>/gim, '');// 去掉所有的html标记
    const result = str.replace(/(^\s+)|(\s+$)/g, '');// 去掉前后空格
    return result.replace(/\s/g, '');// 去除文章中间空格
};
