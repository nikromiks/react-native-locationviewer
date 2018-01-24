import keymirror from 'keymirror';

export default routes = keymirror({
  List: true,
  Map: true,
  Detail: true,
});

export type Routes = $Call<routes>;