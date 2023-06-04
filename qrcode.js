/**
 * QrCode Generate
 * @author Prk
 */

import QRCode from './lib/qrcode';

export default function(text) {
    return QRCode(O, 'H').addData(text).make().createDataURL();
}