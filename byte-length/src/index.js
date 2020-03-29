/**
 * @module
 * @name byte-length
 * @description 字符集占几个字节，返回字节长度
 * @author kt
 * @since 2018-12-06
 *
 *
 * @param {string} val -传入的字符集
 * @param {number} [num=2] 一个字符占用的字节，全角默认占2个字符，半角默认占一个字符
 * @return {number} len 字符集占用的字节长度
 * @example
 *  var byteLength = require('@fe/utils/byte-length');
 *  或
 *  import byteLength from '@fe/utils/byte-length';
 *  console.log(byteLength('你好'));
 *  ======》4
 */

const dataType = require('../../data-type');

module.exports = (val, num) => {
    if (dataType(val) !== 'string') return;
    if (dataType(num) !== 'number') return;
    let len = 0;
    let defalutNum = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i].match(/[^\x00-\xff]/ig) != null) {
            defalutNum = 2;// 全角默认是占两个字节
        } else {
            defalutNum = 1;// 半角默认占用一个字节
        }
        len += parseInt(num || defalutNum); // 如果是全角，占用几字节
    }
    return len;
};
