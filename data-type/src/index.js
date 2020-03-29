/**
 * @module
 * @name data-type
 * @description 判断数据类型
 * @author kt
 * @since 2019-01-17
 *
 *
 * @param  {*} data 数据
 * @returns  {String} type 数据类型
 * @example
 *  var dataType = require('@fe/utils/data-type');
 *  或
 *  import dataType from '@fe/utils/data-type';
 *  console.log(dataType('123'));
 *  ======》string
 */
module.exports = (data) => {
    data = Object.prototype.toString.call(data);
    const type = {
        '[object String]': 'string', // 字符串
        '[object Object]': 'object', // {}
        '[object Number]': 'number', // 数字
        '[object Array]': 'array', // 数组
        '[object Date]': 'date', // 日期
        '[object Function]': 'function', // 函数
        '[object Boolean]': 'boolean', // 布尔值
        '[object Null]': 'null'// null
    };
    return type[data];
};
