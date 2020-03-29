/**
 * @module
 * @name is-app
 * @description 判断是否为app环境
 * @author kt
 * @since 2019-01-17
 *
 *
 * @returns {Boolean} value 是否为app环境
 * @example
 *  var isApp = require('@fe/utils/is-app');
 *  或
 *  import isApp from '@fe/utils/is-app';
 *  console.log(isApp();
 *  ======》false
 */

module.exports = () => {
    const ua = navigator.userAgent.toLowerCase();
    const cookiestr = document.cookie;
    if (ua.indexOf('cdvsupport') >= 0 || cookiestr.indexOf('cdvsupport') >= 0) {
        return true;
    }
    return false;
};
