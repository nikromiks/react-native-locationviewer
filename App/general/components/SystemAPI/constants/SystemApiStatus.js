// @flow
import keymirror from 'keymirror';

export const NET_STATUS = keymirror({
  IS_REACHABLE: true,
  NONE: true
});

export const APP_STATUS = {
  INACTIVE: 'inactive',
  BACKGROUND: 'background',
  ACTIVE: 'active'
};

export type AppStatus = $Values<typeof APP_STATUS>;
export type NetStatus = $Call<NET_STATUS>;
