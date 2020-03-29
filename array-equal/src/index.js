/**
 * @module
 * @name array-equal
 * @description 判断两个简单数组是否相等
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @returns {Boolean} 比较的结果值
 * @example
 *  var arrayEqual = require('front-end-utils/array-equal');
 *  或
 *  import arrayEqual from 'front-end-utils/array-equal';
 *  console.log(arrayEqual(['1'], ['1']));
 *  ======》true
 */

const dataType = require('../../data-type');

module.exports = (arr1, arr2) => {
    if (dataType(arr1) !== 'array') return;
    if (dataType(arr2) !== 'array') return;
    if (arr1 === arr2) return true;
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};
