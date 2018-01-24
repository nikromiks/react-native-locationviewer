import { StyleSheet } from 'react-native';
import colors from 'app/general/constants/colors';

const common = {
  dialog: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dialogActionText: {
    fontSize: 17,
    textAlign: 'center'
  }
};

export default StyleSheet.create({
  dialogOverlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.popupOutside
  },
  dialogContent: {
    width: 270,
    height: 165,
    marginTop: 140,
    backgroundColor: colors.alertDialogBackground,
    borderRadius: 13,
    overflow: 'hidden'
  },
  dialogHeader: {
    height: 84,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  dialogTitleText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black
  },
  dialogSubTitleText: {
    fontSize: 13,
    color: colors.black,
    marginTop: 6
  },
  dialogBody: {
    height: 37,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.alertDialogBackground
  },
  dialogInput: {
    height: 24,
    width: 200,
    fontSize: 13,
    color: colors.black,
    paddingLeft: 5, // Do not add other padding! See https://github.com/facebook/react-native/issues/14711
    backgroundColor: colors.promptInput
  },
  placeholderText: {
    fontSize: 13,
    color: colors.black
  },
  dialogFooter: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.alertDialogSeparator
  },
  dialogActionLeft: {
    ...common.dialog,
    borderRightWidth: 1,
    borderColor: colors.alertDialogSeparator
  },
  dialogActionRight: {
    ...common.dialog
  },
  dialogActionLeftText: {
    ...common.dialogActionText,
    fontWeight: '600',
    color: colors.black
  },
  dialogActionRightText: {
    ...common.dialogActionText,
    color: colors.alertDialogActionText
  }
});
