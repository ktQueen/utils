/**
 * @module
 * @name is-wechat
 * @description 判断是否为微信环境
 * @author kt
 * @since 2019-01-17
 *
 *
 * @returns {Boolean} value 是否为微信环境
 * @example
 *  var isWechat = require('@fe/utils/is-wechat');
 *  或
 *  import isWechat from '@fe/utils/is-wechat';
 *  console.log(isWechat();
 *  ======》false
 */

module.exports = () => {
    const ua = navigator.userAgent.toLowerCase();
    return !!/micromessenger/.test(ua);
};
