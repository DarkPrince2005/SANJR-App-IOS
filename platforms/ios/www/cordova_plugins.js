cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/daan.cordova.camera/www/CameraConstants.js",
        "id": "daan.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/daan.cordova.camera/www/CameraPopoverOptions.js",
        "id": "daan.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/daan.cordova.camera/www/Camera.js",
        "id": "daan.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/daan.cordova.camera/www/ios/CameraPopoverHandle.js",
        "id": "daan.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.barcodescanner": "2.0.1",
    "daan.cordova.camera": "0.3.4"
}
// BOTTOM OF METADATA
});