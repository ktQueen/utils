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
 * @name array-object-repeat
 * @description 数组对象重复
 * @author kt
 * @since 2018-12-18
 */

const dataType = __webpack_require__(1);

const arrayObjectFn = {
    // 数组内容对象转成字符串,去空,排序
    changeArrStr(arr) {
        const newArr = [];
        if (arr.length === 0) {
            return;
        } else {
            for (let i = 0; i < arr.length; i++) {
                const thisObj = this.sortObjectFun(arr[i]);
                let thisStr = JSON.stringify(thisObj);
                thisStr = thisStr.replace(/(\s|[\\t])/g, ''); // 去除空格及\t空白字符
                newArr.push(thisStr);
            }
        }
        return newArr;
    },
    // 对象排序
    sortObjectFun(obj) {
        const keyArr = []; // 对象的key
        for (const item in obj) {
            keyArr.push(item);
        }

        keyArr.sort(); // 降序
        const newObj = {};
        for (let i = 0; i < keyArr.length; i++) {
            newObj[keyArr[i]] = obj[keyArr[i]];
        }
        return newObj;
    }
};
module.exports = {
    /**
     * @description 数组对象去重
     * @param {array} arr -传入需要去重的数组对象
     * @return {array} newArr -去重之后的数组对象
     * @example
     *  var arrayObjectRepeat = require('front-end-utils/array-object-repeat');
     *  或
     *  import arrayObjectRepeat from 'front-end-utils/array-object-repeat';
     *  console.log(arrayObjectRepeat.unRepeatObject([{'name':'1'},{'name':'1'},{'name':'2'}]));
     *  ======》[{'name':'1'},{'name':'2'}]
     */
    unRepeatObject(arr) {
        if (dataType(value) !== 'array') return;
        if (!(arr && arr.length > 0)) {
            return false;
        }
        const tmepArr = [];
        // 将数组对象转成数组字符串
        const newStr = arrayObjectFn.changeArrStr(arr);
        newStr.sort();
        // 数组去重
        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i] !== tmepArr[tmepArr.length - 1]) {
                tmepArr.push(newStr[i]);
            }
        }
        const newArr = [];
        // 新数组字符串转成数组对象
        for (let i = 0; i < tmepArr.length; i++) {
            newArr.push(JSON.parse(tmepArr[i]));
        }
        return newArr;
    },
    /**
     * @description 是否重复
     * @param {array} arr -传入需要判断是否重复的数组对象
     * @return {Boolean}  value -是否重复
     * @example
     *  var arrayObjectRepeat = require('front-end-utils/array-object-repeat');
     *  或
     *  import arrayObjectRepeat from 'front-end-utils/array-object-repeat';
     *  console.log(arrayObjectRepeat.isRepeat([{'name':'1'},{'name':'1'},{'name':'2'}]));
     *  ======》true
     */
    isRepeat(arr) {
        if (dataType(value) !== 'array') return;
        const newArr = arrayObjectFn.unRepeatObject(arr);
        if (newArr.length !== arr.length) {
            return true; // 有重复
        } else {
            return false; // 无重复
        }
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