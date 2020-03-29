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
 * @name array-exchange-location
 * @author kt
 * @description 数组元素之间交换位置的方法
 * @date 2017-9-7
 */

const dataType = __webpack_require__(1);

module.exports = {
  /**
   * @description 相互交换
   * @param {array} arr -交换位置的整个数组
   * @param {number} index -现在的位置
   * @param {string} newIndex -交换位置后位置
   * @returns {array} arr 返回交换之后的新数组
   * @example
   *  var arrayExchangeLocation = require('@fe/utils/array-exchange-location');
   *  或
   *  import arrayExchangeLocation from '@fe/utils/array-exchange-location';
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
   *  var arrayExchangeLocation = require('@fe/utils/array-exchange-location');
   *  或
   *  import arrayExchangeLocation from '@fe/utils/array-exchange-location';
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
   *  var arrayExchangeLocation = require('@fe/utils/array-exchange-location');
   *  或
   *  import arrayExchangeLocation from '@fe/utils/array-exchange-location';
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
       *  var dataType = require('@fe/utils/data-type');
       *  或
       *  import dataType from '@fe/utils/data-type';
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