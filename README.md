# Utils for UniApp
Author: `Prk`

## How to use?

Hmm...


## What the fuck is this?

 - `request.js` - uni.request
 - `share.js` - Weixin(WeChat) Miniprogram Share (Mixin)
 - `wxmp-update.js` - Weixin(WeChat) Miniprogram Update
 - `qrcode.js` - QrCode Generate [GitHub](https://github.com/kazuhikoarase/qrcode-generator/blob/master/js/qrcode.js)


## How to use?

### Share.js

`main.js`

``` js
import share from '@/utils/share';
Vue.mixin(share);
```


### WXMP-Update

`App.vue`

``` js
// #ifdef MP-WEIXIN
import wxmpUpdate from '@/utils/wxmp-update';
// #endif
```

`App.vue` (onLaunch)

``` js
// #ifdef MP-WEIXIN
wxmpUpdate();
// #endif
```


### QrCode

Import

```js
import generateQRCode from '@/utils/qrcode';
```

Vue Computed

```js
qrCode(text) {
    return generateQRCode(text);
}
```