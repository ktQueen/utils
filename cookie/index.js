(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module
 * @name cookie
 * @description 实现对cookie的增删改查
 * @author kt
 * @since 2018-11-29
 */

const dataType = __webpack_require__(1);

module.exports = {
    /**
     * @description 设置cookie
     * @param {string} name cookie名
     * @param {string} value cookie值
     * @param {string|number} [time] cookie的有效时间，如果不设置expres为session。关闭浏览器后或者过了session时间就清除cookie,
     * time参数可以分两种情况：
     * a. 如果是整数，则代码内部直接算绝对过期时间
     * b. 如果是2016-01-01 00:00:00这种格式则直接设置为过期时间
     * @param {string} [domain]  cookie的域名，默认为js文件所在域名
     * @param {String} [path='/'] cookie路径，默认为当前路径js文件所在路径
     * @example
     *  var cookie = require('front-end-utils/cookie');
     *  或
     *  import cookie from 'front-end-utils/cookie';
     *  cookie.setCookie('user', 'kitty', '2016-01-01 00:00:00');
     */
    setCookie(name, value, time, domain, path) {
        if (dataType(name) !== 'string') return;
        let str = name + '=' + encodeURIComponent(value);
        let date;
        if (time) {
            if (dataType(time) === 'number') {
                const exp = new Date();
                time = exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
            }
            date = new Date(time).toGMTString();
            str += ';expires=' + date;
        }
        domain = domain ? domain : document.domain; // 如果没传入domain，算一下主域
        str = str + ';domain=' + domain;
        str = str + ';path=' + (path ? path : '/');
        document.cookie = str;
    },
    /**
     * @description 获取cookie
     * @param {string} name cookie名
     * @return {string|null} cookie值
     * @example
     *  var cookie = require('front-end-utils/cookie');
     *  或
     *  import cookie from 'front-end-utils/cookie';
     *  cookie.getCookie('user');
     *  ========>kitty
     */
    getCookie(name) {
        if (dataType(name) !== 'string') return;
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        const arr = document.cookie.match(reg);
        if (arr) {
            return decodeURIComponent(arr[2]);
        } else {
            return null;
        }
    },
    /**
     * @description 删除cookie,要删除一个cookie，比如domain和path完全相同。如果设置cookie时没有设置domain和path，则删除时也不需要设置这两个值，如果设置了则删除时就需要传入这两个值
     * @param  {String} name   [cookie名]
     * @example
     *  var cookie = require('front-end-utils/cookie');
     *  或
     *  import cookie from 'front-end-utils/cookie';
     *  cookie.delCookie('user');
     */
    delCookie(name) {
        if (dataType(name) !== 'string') return;
        this.setCookie(name, "", -1);
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "/";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

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
       *  var dataType = require('front-end-utils/data-type');
       *  或
       *  import dataType from 'front-end-utils/data-type';
       *  console.log(dataType('123'));
       *  ======》string
       */
      module.exports = data => {
        data = Object.prototype.toString.call(data);
        const type = {
          '[object String]': 'string', // 字符串
          '[object Object]': 'object', // {}
          '[object Number]': 'number', // 数字
          '[object Array]': 'array', // 数组
          '[object Date]': 'date', // 日期
          '[object Function]': 'function', // 函数
          '[object Boolean]': 'boolean', // 布尔值
          '[object Null]': 'null' // null
        };
        return type[data];
      };

      /***/
    }]
    /******/)
  );
});

/***/ })
/******/ ]);
});