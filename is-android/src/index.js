/**
 * @module
 * @name is-android
 * @description 判断是否是Android
 * @author kt
 * @since 2018-12-18
 *
 * @return {boolean} 如果为Android手机返回true，否则返回false
 * @example
 *  var isAndroid = require('@fe/utils/is-android');
 *  或
 *  import isAndroid from '@fe/utils/is-android';
 *  console.log(isAndroid());
 *  ======》false
 */

module.exports = () => {
    const u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
};

