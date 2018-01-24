// @flow
import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    buttons: {
      back: 'Back'
    },
    prompt: {
      cancel: 'Cancel',
      save: 'Save'
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
      dialog: {
        title: 'Please enter place name',
        placeholder: 'New name'
      }
    },
  },
};

export default I18n