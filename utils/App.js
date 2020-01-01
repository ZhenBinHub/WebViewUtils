/*
 * @Description: window下包含所有工具类的命名空间
 * @Author: linzhenbin
 * @LastEditor: linzhenbin
 * @LastEditTime : 2020-01-01 21:01:39
 */
import WebViewUtils from './WebVIewUtils'
import DevWebViewUtils from './DevWebViewJavasriptBridgeUtils'

export default class App {
    static get(url, params) {
        return this.stateToHandler['get'](url, params)
    }

    static post(url, params) {
        return this.stateToHandler['post'](url, params)
    }

    static callHandler(handlerName, params) {
        return this.stateToHandler['callHandler'](handlerName, params)
    }

    static registerHandler(handlerName) {
        return this.stateToHandler['registerHandler'](handlerName)
    }

    static stateToHandler(handler) {
        if (process.env === 'production') {
            return WebViewUtils[handler]
        }
        return DevWebViewUtils[handler]
    }
}