import { ActionReducerMap } from "@ngrx/store";
import * as fromEstados from './estados/estados.reducer';

export interface AppState {
[fromEstados.ESTADOS_FEATURE_KEY]: fromEstados.EstadoState
}

export const reducers: ActionReducerMap<AppState> = {
[fromEstados.ESTADOS_FEATURE_KEY]: fromEstados.estadoReducer
}