/**
 * @module
 * @name regular
 * @description 正则
 * @author kt
 * @since 2018-12-07
 */
module.exports = {
    /**
     * @description 邮箱
     * @example
     *  var regular = require('front-end-utils/regular');
     *  或
     *  import regular from 'front-end-utils/regular';
     *  console.log(regular.email.test('123'));
     *  ======》false
     */
    email: /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z]{2,}$/,
    /**
     * @description 电话号码（复杂）
     * 正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX
     * @example
     *  var regular = require('front-end-utils/regular');
     *  或
     *  import regular from 'front-end-utils/regular';
     *  console.log(regular.phoneNumber.test('123'));
     *  ======》false
     */
    phoneComplex: /^(\\(\\d{3,4}\\)|\\d{3,4}-)?\\d{7,8}$/,
    /**
     * @description 手机号码（简单）
     * 正确格式为：1开头，后面10位就行
     * @example
     *  var regular = require('front-end-utils/regular');
     *  或
     *  import regular from 'front-end-utils/regular';
     *  console.log(regular.phone.test('123'));
     *  ======》false
     */
    phoneSimple: /^1\d{10}$/,
    /**
     * @description 身份证号（15位或18位数字）
     * @example
     *  var regular=require('front-end-utils/regular');
     *  或
     *  import regular from 'front-end-utils/regular';
     *  console.log(regular.idCard.test('123'));
     *  ======》false
     */
    idCard: /^\\d{15}|\\d{18}$/,
    /**
     * @description 银行卡号（12-20位数字）
     * @example
     *  var regular=require('front-end-utils/regular');
     *  或
     *  import regular from 'front-end-utils/regular';
     *  console.log(regular.bankCardNumber.test('123'));
     *  ======》false
     */
    bankCardNumber: /^\d{12,20}$/
};
