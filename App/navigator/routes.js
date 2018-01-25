// @flow
import keymirror from 'keymirror';

const routes = keymirror({
  List: true,
  Map: true,
  Detail: true,
});
export default routes;

export type Routes = $Call<routes>;