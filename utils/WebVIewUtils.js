/*
 * @Description: 客户通信方法类
 * @Author: linzhenbin
 * @LastEditor: linzhenbin
 * @LastEditTime : 2020-01-01 16:03:50
 */

export default class WebViewUtils {

    /**
     * @description: 调用客户端插件(触发客户端的事件)
     * @params: {String} handlerName 插件名
     * @params: {Array | Object} params 调用插件的传参
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static callHandler(handlerName, params) {
        return new Promise((resolve, reject) => {
            WebViewJavascriptBridge.callHandler(
                handlerName,
                params,
                function(res) {
                    resolve(res)
                }
            )
        })
    }

    /**
     * @description: JS注册的事件，供客户端触发
     * @params: {String} handlerName 事件名
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static registerHandler(handlerName) {
        return new Promise((resolve, reject) => {
            WebViewJavascriptBridge.registerHandler(handlerName, function(data, responseCb) {
                resolve(data)
            })
        })
    }

    /**
     * @description: 通过AresService发送get请求
     * @params: {String} url 调用的服务端.do地址 eg: /user.do?ID=1234
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static get(url, params) {
        let data = ['GET', url, params, '']
        return new Promise((resolve, reject) => {
            WebViewJavascriptBridge.callHandler(
                'AresService',
                data,
                function(res) {
                    resolve(res)
                }
            )
        })
    }
    
    /**
     * @description: 通过AresService发送post请求
     * @params: {String} url 调用的服务端.do地址
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static post(url, params) {
        let data = ['post', url, params, '']
        return new Promise((resolve, reject) => {
            WebViewJavascriptBridge.callHandler(
                'AresService',
                data,
                function(res) {
                    resolve(res)
                }
            )
        })
    }
}