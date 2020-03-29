/**
 * @module
 * @name object-is-empty
 * @description 判断`obj`是否为空
 * @author kt
 * @since 2019-01-03
 *
 *
 * @param {Object} obj 对象
 * @returns {Boolean} value 对象是否为空
 * @example
 *  var objectIsEmpty = require('front-end-utils/object-is-empty');
 *  或
 *  import objectIsEmpty from 'front-end-utils/object-is-empty';
 *  console.log(objectIsEmpty({});
 *  ======》true
 */

const dataType = require('../../data-type');

module.exports = (obj) => {
    if (dataType(obj) !== 'object') return false;
    if (Array.isArray(obj)) return obj.length <= 0;
    else return !Object.keys(obj).length;
};
