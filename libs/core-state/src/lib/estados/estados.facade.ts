import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Estado } from "@estados/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as EstadosActions from './estados.actions';
import * as EstadosSelectors from './estados.selectors';
import * as fromEstados from './estados.reducer';

@Injectable({
    providedIn: 'root',
})

export class EstadoFacade {
    allEstados$ = this.store.pipe(
        map((state) => EstadosSelectors.getAllEstados(state)),
    )
    selectedEstados$ = this.store.pipe(select(EstadosSelectors.getSelectedEstado));
    loaded$ = this.store.pipe(select(EstadosSelectors.getEstadosLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) => 
        action.type === EstadosActions.createEstado({} as any) .type ||
        action.type === EstadosActions.deleteEstado({} as any) .type ||
        action.type === EstadosActions.updateEstado({} as any) .type 
        ),
    )

    selectEstado(estadoId: string) {
        this.dispatch(EstadosActions.selectEstado({ estadoId }))
    };

    loadEstados() {
        this.dispatch(EstadosActions.loadEstados())
    };

    loadEstado(estadoId: string) {
        this.dispatch(EstadosActions.loadEstado({ estadoId }))
    };

    saveEstado(estado: Estado) {
        estado.id ? this.updateEstado(estado) : this.createEstado(estado)
    };

    createEstado(estado: Estado) {
        this.dispatch(EstadosActions.createEstado({ estado }))
    };

    updateEstado(estado: Estado) {
        this.dispatch(EstadosActions.updateEstado({ estado }))
    };

    deleteEstado(estado: Estado) {
        this.dispatch(EstadosActions.deleteEstado({ estado }))
    }

    dispatch(action: Action) {
        this.store.dispatch(action)
    }

    constructor(
        private store: Store<fromEstados.EstadoPartialState>,
        private actions$: ActionsSubject
    ) {}
}