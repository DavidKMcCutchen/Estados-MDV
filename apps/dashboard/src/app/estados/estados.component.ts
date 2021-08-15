import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyEstado, Estado } from '@estados/api-interfaces';
import { EstadoFacade } from '@estados/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'estados-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})

export class EstadosComponent implements OnInit {
  allEstados$: Observable<Estado[]> = this.estadoFacade.allEstados$;
  selectedEstado$: Observable<Estado>= this.estadoFacade.selectedEstados$

  form: FormGroup;

  constructor(
    private estadoFacade: EstadoFacade,
    private formBuilder: FormBuilder
    ) {
      this.estadoFacade.mutations$.subscribe((_) => this.resetEstado());
     }

  ngOnInit() {
    this.initForm();
    this.estadoFacade.loadEstados();
    this.resetEstado()
  };

  selectEstado(estado: Estado) {
    this.estadoFacade.selectEstado(estado.id)
    this.form.patchValue(estado);
  };

  saveEstado(estado: Estado) {
    this.estadoFacade.saveEstado(estado)
  };

  deleteEstado(estado: Estado) {
    this.estadoFacade.deleteEstado(estado)
  };

  resetEstado() {
    this.form.reset();
    this.selectEstado(emptyEstado);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      capital: [''],
      population: [''],
    })
  }

}
