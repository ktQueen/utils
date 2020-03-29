/**
 * @module
 * @name cookie
 * @description 实现对cookie的增删改查
 * @author kt
 * @since 2018-11-29
 */

const dataType = require('../../data-type');

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
     *  var cookie = require('@fe/utils/cookie');
     *  或
     *  import cookie from '@fe/utils/cookie';
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
        domain = domain ? domain : document.domain;// 如果没传入domain，算一下主域
        str = str + ';domain=' + domain;
        str = str + ';path=' + (path ? path : '/');
        document.cookie = str;
    },
    /**
     * @description 获取cookie
     * @param {string} name cookie名
     * @return {string|null} cookie值
     * @example
     *  var cookie = require('@fe/utils/cookie');
     *  或
     *  import cookie from '@fe/utils/cookie';
     *  cookie.getCookie('user');
     *  ========>kitty
     */
    getCookie(name) {
        if (dataType(name) !== 'string') return;
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        const arr = document.cookie.match(reg);
        if (arr) { return decodeURIComponent(arr[2]); } else { return null; }
    },
    /**
     * @description 删除cookie,要删除一个cookie，比如domain和path完全相同。如果设置cookie时没有设置domain和path，则删除时也不需要设置这两个值，如果设置了则删除时就需要传入这两个值
     * @param  {String} name   [cookie名]
     * @example
     *  var cookie = require('@fe/utils/cookie');
     *  或
     *  import cookie from '@fe/utils/cookie';
     *  cookie.delCookie('user');
     */
    delCookie(name) {
        if (dataType(name) !== 'string') return;
        this.setCookie(name, "", -1);
    }
};

