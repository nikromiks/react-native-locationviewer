// @flow
/* eslint-disable */
import type { Reducers } from 'app/general/reducers';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;
