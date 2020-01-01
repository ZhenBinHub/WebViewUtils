/*
 * @Description: 基于fetch封装的Http类，用于在development环境下请求mockServer 
 * @Author: linzhenbin
 * @LastEditor: linzhenbin
 * @LastEditTime : 2020-01-01 18:48:35
 */

export default class HttpUtils {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}