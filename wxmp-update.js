/**
 * Weixin(WeChat) Miniprogram Update
 * @author Prk
 */

export default function() {
    let updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function(res) {
            console.log(res.hasUpdate, 'onCheckForUpdate(wxmp-update)');
        });
        updateManager.onUpdateReady(function() {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) updateManager.applyUpdate();
                }
            });
        });
        updateManager.onUpdateFailed(function() {
            // Update Failed
        });
}