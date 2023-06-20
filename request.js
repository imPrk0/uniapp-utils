/**
 * Re UniApp request
 * @author Prk
 */

import {
    baseURL
} from '@/env';

export default opt => {
    if (opt.loading) uni.showLoading({
        title: '加载中',
        mask: true
    });
    const {
        url,
        method,
        data,
        headers
    } = opt;
    // Request interceptor
    let apiToken = uni.getStorageSync('api_token');
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + url,
            method,
            data,
            dataType: 'json',
            header: Object.assign({}, headers, {
                Authorization: apiToken ? `Bearer ${apiToken}` : undefined,
            }),
            success: res => {
                // Response interceptor
                resolve(res.data);
            },
            fail: err => {
                // Response interceptor
                reject(err);
            },
            complete: () => {
                // Response interceptor
                if (opt.loading) uni.hideLoading();
            }
        });
    })
}