// @flow
import _ from 'lodash';

const DELAY = 500;

export default function (func: () => void) {
  return _.debounce(func, DELAY, { leading: true, trailing: false });
}
export function debounceTrailigHandler(func: () => void, delay: number = DELAY) {
  return _.debounce(func, delay, { leading: false, trailing: true });
}

export function debounceLeading(func: () => void, delay: number = DELAY) {
  return _.debounce(func, delay, { leading: true, trailing: false });
}
