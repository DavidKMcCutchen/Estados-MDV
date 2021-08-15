import { emptyEstado } from "@estados/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { estadoAdapter, EstadoState, ESTADOS_FEATURE_KEY } from "./estados.reducer";

export const getEstadoState = createFeatureSelector<EstadoState>(ESTADOS_FEATURE_KEY);

const { selectAll, selectEntities } = estadoAdapter.getSelectors();

export const getEstadosLoaded = createSelector(
    getEstadoState,
    (state: EstadoState) => state.loaded
);

export const getEstadoError = createSelector(
    getEstadoState,
    (state: EstadoState) => state.error
);

export const getAllEstados = createSelector(
    getEstadoState,
    (state: EstadoState) => selectAll(state)
);

export const getEstadoEntities = createSelector(
    getEstadoState,
    (state: EstadoState) => selectEntities(state)
);

export const getSelectedEstadoId = createSelector(
    getEstadoState,
    (state: EstadoState) => state.selectedId
);

export const getSelectedEstado = createSelector(
    getEstadoEntities,
    getSelectedEstadoId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyEstado
)