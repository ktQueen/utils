/**
 * @module
 * @name is-mobile
 * @description 判断是否是移动端
 * @author kt
 * @since 2018-12-18
 *
 * @return {boolean} 如果为移动端返回true，否则返回false
 * @example
 *  var isMobile = require('front-end-utils/is-mobile');
 *  或
 *  import isMobile from 'front-end-utils/is-mobile';
 *  console.log(isMobile());
 *  ======》false
 */

module.exports = () => {
    if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
        return true;
    }else{
        return false;
    }
};

