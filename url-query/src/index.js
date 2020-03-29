/**
 * @module
 * @name url-query
 * @description url参数的序列化与反序列化
 * @author kt
 * @since 2018-12-07
 */

const dataType = require('../../data-type');

module.exports = {
    /**
     * @description object转化成url拼接样式
     * @param {object} obj 需要转化的参数
     * @return {string} 拼接好的字符串
     * @example
     *  var urlQuery = require('@fe/utils/url-query');
     *  或
     *  import urlQuery from '@fe/utils/url-query';
     *  console.log(urlQuery.objToUrl({name:'hehe',age:10}));
     *  ========>name=hehe&age=10
     */
    objToUrl: obj => {
        // 判断入参
        if (dataType(obj) !== 'object') return;
        const arr = [];
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
            }
        }
        return arr.join('&');
    },
    /**
     * @description url地址参数转化成object形式
     * @param {string} url -传入的url或者后面拼接的参数
     * @return {object} 对应的url参数对转换的对象
     * @example
     *  var urlParameterConvertObject = require('@fe/utils/url-parameter-convert-object');
     *  或
     *  import urlParameterConvertObject from '@fe/utils/url-parameter-convert-object';
     *  console.log(urlParameterConvertObject('/pages/viewpage.action?pageId=82796794'));
     *  ========>{pageId: "82796794"}
     *  console.log(urlQuery.urlToObj('a=1&b=2'));
     *  ========>{a:1,b:2}
     */
    urlToObj: (url) => {
        // 判断入参
        if (dataType(url) !== 'string') return;
        const reg_url = /^[^\?]+\?([\w\W]+)$/;
        const reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g; // g is very important
        const arr_url = reg_url.exec(url);
        const urlObj = {};
        // 如果是地址形式
        if (arr_url && arr_url[1]) {
            const str_para = arr_url[1];
            let result;
            while ((result = reg_para.exec(str_para)) != null) {
                urlObj[result[1]] = result[2];
            }
        } else {
            // 如果是拼接形式
            const string = url.split('&');
            const res = {};
            for (let i = 0; i < string.length; i++) {
                const str = string[i].split('=');
                if (str[0] !== '') {
                    res[str[0]] = str[1];
                }
            }
            return res;
        }
        return urlObj;
    }
};
