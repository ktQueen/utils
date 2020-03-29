/**
 * @module
 * @name money-change
 * @description 钱的大小写转换
 * @author kt
 * @since 2019-01-02
 */

/**
 * @module
 * @name money-change
 * @description 钱的大小写转换
 * @author kt
 * @since 2019-01-02
 */

const c = '零壹贰叁肆伍陆柒捌玖'.split('');// ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]
let t;
const _c = {}; // 反向对应关系
for (let i = 0; i < c.length; i++) {
    _c[c[i]] = i;
}

const d = '元***万***亿***万';
const e = ',拾,佰,仟'.split(',');
function unit4(arr) {
    let str = '', i = 0;
    while (arr.length) {
        const t = arr.pop();
        str = (c[t] + (t === 0 ? '' : e[i])) + str;
        i++;
    }

    str = str.replace(/[零]{2,}/g, '零');

    str = str.replace(/^[零]/, '');
    str = str.replace(/[零]$/, '');
    if (str.indexOf('零') === 0) {
        str = str.substring(1);
    }
    if (str.lastIndexOf('零') === str.length - 1) {
        str = str.substring(0, str.length - 1);
    }

    return str;
}
function _formatD(a) {
    // 转化整数部分
    const arr = a.split('');
    let i = 0;
    let result = '';
    while (arr.length) {
        const arr1 = arr.splice(-4, 4);

        let dw = d.charAt(i);
        const unit = unit4(arr1);

        if (dw === '万' && !unit) {
            dw = '';
        }
        result = unit + dw + result;
        i += 4;
    }
    return result === '元' ? '' : result;
}
function _formatF(b) {
    // 转化小数部分
    b = b || '';
    switch (b.length) {
        case 0:
            return '整';
        case 1:
            return c[b] + '角';
        default:
            return c[b.charAt(0)] + '角' + c[b.charAt(1)] + '分';
    }
}
function _format(n) {
    const a = ('' + n).split('.');
    const a0 = a[0];
    const a1 = a[1];
    return _formatD(a0) + _formatF(a1);
}

function parse4(u4) {
    let res = 0;
    while (t = /([零壹贰叁肆伍陆柒捌玖])([拾佰仟]?)/g.exec(u4)) {
        const n = _c[t[1]];
        const d = {
            '': 1,
            拾: 10,
            佰: 100,
            仟: 1000
        }[t[2]];
        res += n * d;
        u4 = u4.replace(t[0], '');
    }
    const result = '0000' + res;
    return result.substring(result.length - 4);
}
function _parseD(d) {
    const arr = d.replace(/[零]/g, '').split(/[万亿]/);
    let rs = '';
    for (let i = 0; i < arr.length; i++) {
        rs += parse4(arr[i]);
    }

    return rs.replace(/^[0]+/, '');
}
function _parseF(f) {
    let res = '';
    const t = f.replace(/[^零壹贰叁肆伍陆柒捌玖]+/g, '').split(''); // 去掉单位
    if (t.length) {
        res = '.';
    } else {
        return '';
    }

    for (let i = 0; i < t.length && i < 2; i++) {
        res += _c[t[i]];
    }

    return res;
}
function _parse(rmb) {
    const a = rmb.split('元');
    let a1 = a[1];
    let a0 = a[0];
    if (a.length === 1) {
        a1 = a0;
        a0 = '';
    }
    return _parseD(a0) + _parseF(a1);
}

const dataType = require('../../data-type');

module.exports = {
    /**
     * @description 小写转大写
     * @param {string|number} num 小写金额
     * @return {string|boolean} 大写金额
     * @example
     *  var moneyChange = require('@fe/utils/money-change');
     *  或
     *  import moneyChange from '@fe/utils/money-change';
     *  console.log(moneyChange.formatRMB('123'));
     *  ======》壹佰贰拾叁元整
     */
    formatRMB(num) {
        if (!(dataType(num) === 'string' || (dataType(num) === 'number'))) return '';
        const n = Number(num);
        if (isNaN(num)) return false;
        if (num === 0) {
            return '零元整';
        } else {
            return _format(n);
        }
    },
    /**
     * @description 大写转小写
     * @param {string} 大写金额
     * @return {string|number} rmb 小写金额
     * @example
     *  var moneyChange = require('@fe/utils/money-change');
     *  或
     *  import moneyChange from '@fe/utils/money-change';
     *  console.log(moneyChange.parseRMB('壹佰贰拾叁元整'));
     *  ======》123
     */
    parseRMB(rmb) {
        if (dataType(rmb) !== 'string') return '';
        if (/^[零壹贰叁肆伍陆柒捌玖元万亿拾佰仟角分整]{2,}$/.test(rmb)) {
            const result = _parse(rmb);
            return rmb === this.formatRMB(result) ? result : result + '(?)';
        } else {
            return '';
        }
    }
};
