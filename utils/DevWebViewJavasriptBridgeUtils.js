/*
 * @Description: development环境下自定义的WebViewJavascriptBridge对象
 * @Author: linzhenbin
 * @LastEditor: linzhenbin
 * @LastEditTime : 2020-01-01 19:05:37
 */
import HttpUtils from './HttpUtils'
import WebViewUtils from './WebVIewUtils'

export default class DevWebViewJavascriptBridge {

    /**
     * @description: 调用客户端插件(触发客户端的事件)
     * @params: {String} handlerName 插件名
     * @params: {Array | Object} params 调用插件的传参
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static async callHandler(handlerName, params) {
        let mockData = await this.getMockData(handlerName, params)
        if (mockData.exist === '1') {
            return Promise.resolve(mockData)
        }
        return WebViewUtils.callHandler(handlerName, params)
    }

    /**
     * @description: JS注册的事件，供客户端触发
     * @params: {String} handlerName 事件名
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static registerHandler(handlerName) {
        return WebViewUtils.registerHandler(handlerName)
    }

    /**
     * @description: 通过AresService发送get请求
     * @params: {String} url 调用的服务端.do地址 eg: /user.do?ID=1234
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static async get(url, params) {
        let mockData = await this.getMockData('AresService', ['GET', url, params, ''])
        if (mockData.exist === '1') {
            return Promise.resolve(mockData)
        }
        return WebViewUtils.get(url, params)
    }
    
    /**
     * @description: 通过AresService发送post请求
     * @params: {String} url 调用的服务端.do地址
     * @return: {Promise} Promise对象
     * @Author: linzhenbin
     */
    static post(url, params) {
        let mockData = await this.getMockData('AresService', ['POST', url, params, ''])
        if (mockData.exist === '1') {
            return Promise.resolve(mockData)
        }
        return WebViewUtils.post(url, params)
    }

    /**
     * @description: 获取mock数据
     * @params: 
     * @return: 
     * @Author: linzhenbin
     */
    static getMockData(url, data) {
        return HttpUtils.post(url, data)
    }
}