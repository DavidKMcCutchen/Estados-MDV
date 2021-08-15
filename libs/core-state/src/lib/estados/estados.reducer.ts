import { Estado } from "@estados/api-interfaces";
import { createEntityAdapter, EntityAdapter,EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as EstadosActions from "./estados.actions";

export const ESTADOS_FEATURE_KEY = 'estados';

export interface EstadoState extends EntityState<Estado> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface EstadoPartialState {
    readonly [ESTADOS_FEATURE_KEY]: EstadoState
};

export const estadoAdapter: EntityAdapter<Estado>= createEntityAdapter<Estado>();

export const initialEstadoState: EstadoState = estadoAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, { error }): EstadoState => ({...state, error});

const onDispatch = (state, action): EstadoState => ({
    ...state,
    loaded: false,
    error: null
});

const _estadoReducer = createReducer(
    initialEstadoState,
    on(
      EstadosActions.loadEstadoFailure,
      EstadosActions.loadEstadosFailure,
      EstadosActions.deleteEstadoFailure,
      EstadosActions.updateEstadoFailure,
      EstadosActions.createEstadoFailure,
      onFailure
    ),
    on(
      EstadosActions.loadEstado,
      EstadosActions.loadEstados,
      EstadosActions.deleteEstado,
      EstadosActions.updateEstado,
      EstadosActions.createEstado,
      onDispatch
    ),
    on(
      EstadosActions.loadEstadoSuccess, (state, { estado}) =>
      estadoAdapter.upsertOne(estado, { ...state, loaded: true})
    ),
    on(
      EstadosActions.selectEstado, (state, { estadoId}) =>({
        ...state,
        selectedId: estadoId
      }) 
    ),
    on(
      EstadosActions.loadEstadosSuccess, (state, { estados }) =>
      estadoAdapter.setAll(estados, {...state, loaded: true})
    ),
    on(
      EstadosActions.deleteEstadoSuccess, (state, { estado }) =>
      estadoAdapter.removeOne(estado.id, {...state, loaded: true})
    ),
    on(
      EstadosActions.updateEstadoSuccess, (state, { estado}) =>
      estadoAdapter.updateOne(
        {id: estado.id, changes: estado},
        {...state, loaded: true}
      )
    ),
    on(
      EstadosActions.createEstadoSuccess, (state, { estado }) =>
      estadoAdapter.addOne(estado, {...state, loaded: true}) 
    ),
  )
  
    export function estadoReducer(
      state: EstadoState | undefined,
      action: Action
    ) {
      return _estadoReducer(state, action)
    }