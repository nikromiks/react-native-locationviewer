// @flow
import _ from 'lodash';

const DELAY = 500;

export default function (func: () => void) {
  return _.debounce(func, DELAY, { leading: true, trailing: false });
}
