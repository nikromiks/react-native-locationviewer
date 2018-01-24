// @flow
import React, {Component, PropTypes} from 'react';
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Modal,
} from 'react-native';
import styles from 'app/general/components/Prompt/PromptStyles';
import colors from 'app/general/constants/colors';
import I18n from 'app/general/locale/Translations';

type Props = {
  title: string,
  subTitle: ?string,
  placeholder: string,
  defaultValue: string,
  visible: boolean,
  onCancel: (*) => void,
  onSubmit: (*) => void,
  onChangeText: (*) => void,
  cancelText: ?string,
  cancelButtonTextStyle: ?number,
  submitText: string,
  submitButtonTextStyle: ?number
}

type States = {
  value: string,
  visible: boolean
}

export default class Prompt extends Component<Props, States> {
  static defaultProps = {
    visible: false,
    subTitle: '',
    defaultValue: '',
    cancelText: I18n.t('prompt.cancel'),
    submitText: I18n.t('prompt.ok'),
    onChangeText: () => {
    },
    placeholder: '',
    submitButtonTextStyle: null,
    cancelButtonTextStyle: null,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      value: this.props.defaultValue,
      visible: false,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    const {visible, defaultValue} = nextProps;
    this.setState({
      visible,
      value: defaultValue,
    });
  }

  handleChangeText = (value: string) => {
    this.setState({value});
    this.props.onChangeText(value);
  };

  handleSubmitPress = () => {
    const {value} = this.state;
    this.props.onSubmit(value);
  };

  handleCancelPress = () => {
    this.props.onCancel();
  };

  handleClose = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <Modal
        onDismiss={this.handleClose}
        transparent={true}
        visible={this.props.visible}
        animationType="fade"
        onRequestClose={this.handleClose}
      >
        {this.renderDialog()}
      </Modal>
    );
  }

  renderDialog = () => {
    const {
      title,
      subTitle,
      placeholder,
      defaultValue,
      submitText,
      cancelText,
    } = this.props;

    const cancelButtonTextStyle = this.props.cancelButtonTextStyle
      || styles.dialogActionLeftText;
    const submitButtonTextStyle = this.props.submitButtonTextStyle
      || styles.dialogActionRightText;
    return (
      <View style={styles.dialogOverlay} key={'prompt'}>
        <View style={styles.dialogContent}>
          <View style={styles.dialogHeader}>
            <Text allowFontScaling={false} style={styles.dialogTitleText}>
              {title}
            </Text>
            <Text allowFontScaling={false} style={styles.dialogSubTitleText}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.dialogBody}>
            <TextInput
              style={styles.dialogInput}
              defaultValue={defaultValue}
              onChangeText={this.handleChangeText}
              placeholder={placeholder}
              autoFocus={true}
              underlineColorAndroid={colors.white}
              placeholderTextColor={colors.promptPlaceholderText}
              keyboardAppearance={'dark'}
              autoCorrect={false}
            />
          </View>
          <View style={styles.dialogFooter}>
            <TouchableWithoutFeedback onPress={this.handleCancelPress}>
              <View style={styles.dialogActionLeft}>
                <Text allowFontScaling={false} style={cancelButtonTextStyle}>
                  {cancelText}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.handleSubmitPress}>
              <View style={styles.dialogActionRight}>
                <Text allowFontScaling={false} style={submitButtonTextStyle}>
                  {submitText}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  };
}
