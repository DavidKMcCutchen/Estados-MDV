import { Injectable } from "@angular/core";
import { Estado } from "@estados/api-interfaces";
import { EstadosService } from "@estados/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as EstadosActions from './estados.actions';
import { filter, map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class EstadoEffects {
    loadEstado$ = createEffect(() =>
    this.actions$.pipe(
        ofType(EstadosActions.loadEstado),
        fetch({
            run: (action) =>
                this.estadosService
                    .find(action.estadoId)
                    .pipe(
                        map((estado: Estado) => EstadosActions.loadEstadoSuccess({ estado }))
                    ),
                onError: (action, error) => EstadosActions.loadEstadoFailure({ error })    
        })
    )
    )

    loadEstados$ = createEffect(() =>
    this.actions$.pipe(
        ofType(EstadosActions.loadEstados),
        fetch({
            run: () =>
                this.estadosService
                    .all()
                    .pipe(
                        map((estados: Estado[]) =>
                            EstadosActions.loadEstadosSuccess({ estados }))
                    ),
                onError: (action, error) => EstadosActions.loadEstadosFailure({ error })    
        })
    ) )

    updateEstado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EstadosActions.updateEstado),
      pessimisticUpdate({
        run: (action) =>
        this.estadosService
        .update(action.estado)
        .pipe(
          map((estado: Estado) => EstadosActions.updateEstadoSuccess({ estado })
          )
        ),
      onError: (action, error) => EstadosActions.updateEstadoFailure({ error })  
      })
    ) )
  
    deleteEstado$ = createEffect(() =>
      this.actions$.pipe(
        ofType(EstadosActions.deleteEstado),
        pessimisticUpdate({
          run: (action) =>
          this.estadosService
          .delete(action.estado)
          .pipe(
            map(() => EstadosActions.deleteEstadoSuccess({ estado: action.estado })
            )
          ),
        onError: (action, error) => EstadosActions.deleteEstadoFailure({ error })  
        })
      )
      )
  
      createEstado$ = createEffect(() =>
      this.actions$.pipe(
        ofType(EstadosActions.createEstado),
        pessimisticUpdate({
          run: (action) =>
          this.estadosService
          .create(action.estado)
          .pipe(
            map((estado: Estado) => EstadosActions.createEstadoSuccess({ estado })
            )
          ),
        onError: (action, error) => EstadosActions.createEstadoFailure({ error })  
        })
      ))    


constructor(private actions$: Actions, private estadosService: EstadosService) {}    
}