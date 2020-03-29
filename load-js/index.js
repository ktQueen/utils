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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @module
 * @name load-js
 * @description 动态加载js
 * @param {string} url 引入的js链接
 * @param {string} id 给script添加的ID
 * @return {function} 返回一个promise
 * @author kt
 * @since 2019-08-01
 */

/* eslint-disable */
// 动态加载js
const loadJs = function (url, id) {
    return new Promise((resolve, reject) => {
        if (!id || !url) return console.warn('id or url is not given ...');
        var node = document.getElementById(id);
        if (node) {
            // url已经被加载，不用重复加载
            resolve();
            return;
        }
        node = document.createElement('script');
        node.id = id;
        node.async = false;
        var supportOnload = 'onload' in node;
        if (supportOnload) {
            node.onload = function () {
                resolve();
            };
            node.onerror = function () {
                console.error(url + '加载失败');
                // todo，应该重试加载，重试前将该dom移除
                const jsId = document.getElementById(id);
                jsId && jsId.parentNode.removeChild(this);
                reject('load error');
            };
        } else {
            node.onreadystatechange = function () {
                if (/loaded|complete/i.test(node.readyState)) {
                    resolve();
                }
            };
        }
        node.src = url;
        document.getElementsByTagName('head')[0].appendChild(node);
    });
};
/* harmony export (immutable) */ __webpack_exports__["loadJs"] = loadJs;


/***/ })
/******/ ]);
});