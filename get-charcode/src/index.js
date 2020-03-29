/**
 * @module
 * @name get-charcode
 * @description 获取中文的code编码
 * @author kt
 * @since 2018-11-29
 *
 * @param {string} data -传入的中文字符
 * @return {string}  num -获取对应的中文的code编码
 * @example
 *  var getCharcode = require('front-end-utils/get-charcode');
 *  或
 *  import getCharcode from 'front-end-utils/get-charcode';
 *  getCharcode('您好');
 *  ========>49488
 */

const dataType = require('../../data-type');

module.exports = (data) => {
    if (dataType(data) !== 'string') return;
    let num = 0;
    for (let i = 0; i < data.length; i++) {
        num += parseInt(data.charCodeAt(data[i])) || 6;
    }
    return num;
};
