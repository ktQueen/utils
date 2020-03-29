/**
 * @module
 * @name by-id-get-birthday-and-sex
 * @description 身份证自动带出出生日期和性别
 * @author kt
 * @since 2018-12-17
 *
 *
 * @param {string} value -身份证号码
 * @return {object}  如果身份证是错误的则返回错误提示，否则返回包含出生日期和性别的对象
 * @example
 *  var byIdGetBirthdayAndSex = require('@fe/utils/by-id-get-birthday-and-sex');
 *  或
 *  import byIdGetBirthdayAndSex from '@fe/utils/by-id-get-birthday-and-sex';
 *  console.log(byIdGetBirthdayAndSex('1212'));
 *  ======》身份证号码错误
 *  console.log(byIdGetBirthdayAndSex('110101199003079075'));
 *  ======》{birthday:'1990-03-07',sex:'男'}
 */

const dataType = require('../../data-type');

module.exports = (value) => {
    if (dataType(value) !== 'string') return;
    let reg;// 字符串截取正则
    const reg1 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; // 18位验证正则
    const reg2 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/; // 15位验证正则
    if (!(reg1.test(value) || reg2.test(value))) {
        return {
            code: 1,
            msg: '身份证号码错误'
        };
    }

    if (value.length === 15) {
        reg = /^\d{6}(\d{2})(\d{2})(\d{2})\d{2}(\d)$/;
    } else {
        reg = /^\d{6}(\d{4})(\d{2})(\d{2})\d{2}(\d{1})(?:\d|X)$/;
    }

    const res = reg.exec(value);
    if (!res) {
        return {
            code: 1,
            msg: '身份证号码无法匹配'
        };
    }
    let year = res[1];
    const month = res[2];
    const data = res[3];
    const sex = res[4];
    // 15位身份证的年只有后两位
    if (year < 100) {
        year = '19' + year;
    }
    return {
        code: 0,
        msg: '身份证正确',
        birthday: year + '-' + month + '-' + data,
        birthdayTimeStamp: new Date(year + '-' + month + '-' + data).getTime(),
        sex: sex % 2 === 1 ? '男' : '女'// 判断性别
    };
};
