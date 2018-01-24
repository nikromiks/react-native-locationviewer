import colors from 'app/general/constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 17,
  },
  text: {
    marginBottom: 10,
  },
  inputNote: {
    height: 140,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 6,
  },

});