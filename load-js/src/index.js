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
export const loadJs = function (url, id) {
    return new Promise((resolve, reject) => {
        if (!id || !url) return console.warn('id or url is not given ...')
        var node = document.getElementById(id)
        if (node) {
            // url已经被加载，不用重复加载
            resolve();
            return
        }
        node = document.createElement('script')
        node.id = id
        node.async = false
        var supportOnload = 'onload' in node
        if (supportOnload) {
            node.onload = function () {
                resolve();
            }
            node.onerror = function () {
                console.error(url + '加载失败')
                // todo，应该重试加载，重试前将该dom移除
                const jsId = document.getElementById(id);
                jsId && jsId.parentNode.removeChild(this);
                reject('load error');
            }
        } else {
            node.onreadystatechange = function () {
                if (/loaded|complete/i.test(node.readyState)) {
                    resolve();
                }
            }
        }
        node.src = url
        document.getElementsByTagName('head')[0].appendChild(node)
    })
}

