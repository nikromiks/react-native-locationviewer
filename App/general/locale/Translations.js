// @flow
import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    buttons: {
      buttons: 'Back'
    },
    list: {
      title: 'List',
      buttons: {
        map: 'Map',
      },
    },
    detail: {
      title: 'Detail',
      buttons: {
        save: 'Save',
      },
    },
    map: {
      title: 'Map',
      buttons: {
        list: 'List',
      },
    },
  },
};

export default I18n;