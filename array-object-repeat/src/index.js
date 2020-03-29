/**
 * @module
 * @name array-object-repeat
 * @description 数组对象重复
 * @author kt
 * @since 2018-12-18
 */

const dataType = require('../../data-type');

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
        const keyArr = [];// 对象的key
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
