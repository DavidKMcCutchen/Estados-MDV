import { createAction, props } from "@ngrx/store";
import { Estado } from "@estados/api-interfaces";

// Select Entity

export const selectEstado = createAction(
    '[ESTADOS] Select Estado',
    props<{ estadoId: string}>()
);

// Load All Entities

export const loadEstados = createAction(
    '[ESTADOS] Load Estados'
);

export const loadEstadosSuccess = createAction(
    '[ESTADOS] Load Estados Success',
    props<{ estados: Estado[] }>()
);

export const loadEstadosFailure = createAction(
    '[ESTADOS] Load Estados Failed',
    props<{ error: any }>()
  );
  
  // Load Single Entity
  
  export const loadEstado = createAction(
    '[ESTADOS] Load Estado',
    props<{ estadoId: string}>()
  )
  
  export const loadEstadoSuccess = createAction(
    '[ESTADOS] Load Estado Succeeded',
    props<{ estado: Estado}>()
  )
  
  export const loadEstadoFailure = createAction(
    '[ESTADOS] Load Estado Failure',
    props<{ error: any}>()
  )
  
  // Load Entity Update
  
  export const updateEstado = createAction(
    '[ESTADOS] Update Estado',
    props<{ estado: Estado}>()
  )
  
  export const updateEstadoSuccess = createAction(
    '[ESTADOS] Update Estado Succeeded',
    props<{ estado: Estado}>()
  )
  
  export const updateEstadoFailure = createAction(
    '[ESTADOS] Update Estado Failed',
    props<{ error: any}>()
  )
  
  // Load Entity Delete
  
  export const deleteEstado = createAction(
    '[ESTADO] Estado Deleted',
    props<{estado: Estado}>()
  );
  
  export const deleteEstadoSuccess = createAction(
    '[ESTADO] Estado Deleted Success',
    props<{estado: Estado}>()
  );
  
  export const deleteEstadoFailure = createAction(
    '[ESTADO] Estado Deleted Failure',
    props<{error: any}>()
  );
  
  // Load Create Entity
  
  export const createEstado = createAction(
    '[ESTADO] Create Estado',
    props<{ estado: Estado}>()
  );
  
  export const createEstadoSuccess = createAction(
    '[ESTADO] Create Estado Success',
    props<{ estado: Estado}>()
  );
  
  export const createEstadoFailure = createAction(
    '[ESTADO] Create Estado Failure',
    props<{ error: any }>()
  );