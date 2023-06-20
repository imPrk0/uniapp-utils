/**
 * Re UniApp upload
 * @author Prk
 */

import {
    baseURL
} from '@/env';

export default (uri, filePath) => {
    uni.showLoading({
        title: '上传中',
        mask: true
    });
    let apiToken = uni.getStorageSync('api_token');
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: baseURL + uri,
            filePath,
            name: 'file',
            success: res => {
                resolve(JSON.parse(res.data));
            },
            fail: err => {
                reject(err);
            },
            complete: () => {
                uni.hideLoading();
            }
        });
    })
}