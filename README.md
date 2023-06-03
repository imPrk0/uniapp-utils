# Utils for UniApp
Author: `Prk`

## How to use?

Hmm...


## What the fuck is this?

 - `request.js` - uni.request
 - `share.js` - Weixin(WeChat) Miniprogram Share (Mixin)
 - `wxmp-update.js` - Weixin(WeChat) Miniprogram Update


## How to use?

### Share.js

`main.js`

``` js
import share from '@/utils/share';
Vue.mixin(share);
```


### WXMP-Update

`App.vue` (onLaunch)

``` js
// #ifdef MP-WEIXIN
import wxmpUpdate from '@/utils/wxmp-update';
wxmpUpdate();
// #endif
```