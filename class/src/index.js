/**
 * @module
 * @name class
 * @description 元素class操作
 * @author kt
 * @since 2019-01-21
 */
const hasClass = require('../../class-has');
const addClass = require('../../class-add');
const removeClass = require('../../class-remove');

module.exports = {
    /**
     * @description 为元素添加class
     * @param  {HTMLElement} ele 当前元素
     * @param  {String} cls className名
     * @example
     *  var classObj = require('front-end-utils/class');
     *  或
     *  import classObj from 'front-end-utils/class';
     *  classObj.addClass(document.getElementById('app'), 'demo123');
     */
    addClass:addClass,
    /**
     * @description 判断元素是否有某个class
     * @param {HTMLElement} ele 当前元素
     * @param {String} cls className名
     * @return {Boolean} 是否有当前的class
     * @example
     *  var classObj = require('front-end-utils/class');
     *  或
     *  import classObj from 'front-end-utils/class';
     *  console.log(classObj.hasClass(document.getElementById('demo),'demo123'));
     *  ========>false
     */
    hasClass:hasClass,
    /**
     * @description 为元素移除class
     * @param  {HTMLElement} ele 当前元素
     * @param  {String} cls className名
     * @example
     *  var classObj = require('front-end-utils/class-remove');
     *  或
     *  import classObj from 'front-end-utils/class-remove';
     *  classObj.removeClass(document.getElementById('demo),'demo123');
     */
    removeClass:removeClass
};
