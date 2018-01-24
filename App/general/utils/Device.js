// @flow
import DeviceInfo from 'react-native-device-info';
import { Dimensions, Platform } from 'react-native';

function isIphoneX(): boolean {
  let dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

class DeviceDetector {
  isTablet: boolean;
  isPhone: boolean;
  isIphoneX: boolean;

  constructor() {
    this.isTablet = DeviceInfo.isTablet();
    this.isPhone = !this.isTablet;
    this.isIphoneX = isIphoneX();
  }
}

module.exports = new DeviceDetector();
