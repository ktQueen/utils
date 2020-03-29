/**
 * @module
 * @name array-exchange-location
 * @author kt
 * @description 数组元素之间交换位置的方法
 * @date 2017-9-7
 */

const dataType = require('../../data-type');

module.exports = {
    /**
     * @description 相互交换
     * @param {array} arr -交换位置的整个数组
     * @param {number} index -现在的位置
     * @param {string} newIndex -交换位置后位置
     * @returns {array} arr 返回交换之后的新数组
     * @example
     *  var arrayExchangeLocation = require('front-end-utils/array-exchange-location');
     *  或
     *  import arrayExchangeLocation from 'front-end-utils/array-exchange-location';
     *  console.log(arrayExchangeLocation.exchange(['1','2','3','4'],1,3));
     *  ========>['1','4','3','2']
     */
    exchange(arr, index, newIndex) {
        if (dataType(arr) !== 'array') return;
        if (dataType(index) !== 'number') return;
        if (dataType(newIndex) !== 'array') return;
        arr[index] = arr.splice(newIndex, 1, arr[index])[0];
        return arr;
    },
    /**
     * @description 交换到第一个
     * @param {array} arr -交换位置的整个数组
     * @param {number} index -现在的位置
     * @returns {array} arr 返回交换之后的新数组
     * @example
     *  var arrayExchangeLocation = require('front-end-utils/array-exchange-location');
     *  或
     *  import arrayExchangeLocation from 'front-end-utils/array-exchange-location';
     *  console.log(arrayExchangeLocation.toFirst(['1','2','3','4'],2));
     *  ========>['3','2','1','4']
     */
    toFirst(arr, index) {
        if (dataType(arr) !== 'array') return;
        if (dataType(index) !== 'number') return;
        arr.unshift(arr.splice(index, 1)[0]);
        return arr;
    },
    /**
     * @description 交换到最后一个
     * @param {array} arr -交换位置的整个数组
     * @param {string} index -现在的位置
     * @returns {array} arr 返回交换之后的新数组
     * @example
     *  var arrayExchangeLocation = require('front-end-utils/array-exchange-location');
     *  或
     *  import arrayExchangeLocation from 'front-end-utils/array-exchange-location';
     *  console.log(arrayExchangeLocation.toLast(['1','2','3','4'],2));
     *  ========>['1','2','4','3']
     */
    toLast(arr, index) {
        if (dataType(arr) !== 'array') return;
        if (dataType(index) !== 'number') return;
        arr.push(arr.splice(index, 1)[0]);
        return arr;
    }
};

