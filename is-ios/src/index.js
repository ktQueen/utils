/**
 * @module
 * @name is-ios
 * @description 判断是否是ios
 * @author kt
 * @since 2018-01-23
 *
 * @return {boolean} 如果为iOS返回true，否则返回false
 * @example
 *  var isIos = require('@fe/utils/is-ios');
 *  或
 *  import isIos from '@fe/utils/is-ios';
 *  console.log(isIos());
 *  ======》false
 */

module.exports = () => {
    const u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

