const DeviceDetector = require('node-device-detector');
const DeviceDetectorjs = require('device-detector-js');
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0';
const detector = new DeviceDetector();
const detector2 = new DeviceDetectorjs();

const result = detector.detect(userAgent);
const result2 = detector2.parse(userAgent);

const DEVICE_TYPE = require('node-device-detector/parser/const/device-type');
const isTabled  = result.device && [DEVICE_TYPE.TABLET].indexOf(result.device.type) !== -1;
const isMobile = result.device && [DEVICE_TYPE.SMARTPHONE, DEVICE_TYPE.FEATURE_PHONE].indexOf(result.device.type) !== -1;
const isPhablet = result.device && [DEVICE_TYPE.PHABLET].indexOf(result.device.type) !== -1;
const isIOS = result.os && result.os.family === 'iOS';
const isAndroid = result.os && result.os.family === 'Android';
const isDesktop = !isTabled && !isMobile && !isPhablet;

console.log('result parse', result);
console.log('//////////////////////////////');
console.log(result2);
var c = 'dfska af; ' +
'fsdkafdskjfa';
console.log(c);