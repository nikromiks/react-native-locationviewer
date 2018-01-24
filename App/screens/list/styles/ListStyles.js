import colors from 'app/general/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1
  },
  loadingIndicator: {
    position: 'absolute',
    backgroundColor: `${colors.black}BB`,
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});