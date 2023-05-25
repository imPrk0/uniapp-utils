/**
 * Re UniApp request
 * @author Prk
 */

import {
    baseURL
} from '@/env';

export default (opt) => {
    if (opt.loading) uni.showLoading({
        title: '加载中',
        mask: true
    });
    const {
        uri,
        method,
        data,
        header
    } = opt;
    let apiToken = uni.getStorageSync('api_token');
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + uri,
            method,
            data,
            header: {
                Authorization: apiToken ? `Bearer ${apiToken}` : undefined,
                ...header
            },
            success: res => {
                // Request interceptor
                resolve(res.data);
            },
            fail: err => {
                // Response interceptor
                reject(err);
            },
            complete: () => {
                if (opt.loading) uni.hideLoading();
            }
        });
    })
}