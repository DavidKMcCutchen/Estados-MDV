import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Estado } from '@estados/api-interfaces';

@Component({
  selector: 'estados-estados-details',
  templateUrl: './estados-details.component.html',
  styleUrls: ['./estados-details.component.scss']
})
export class EstadosDetailsComponent {
  currentEstado: Estado;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set estado(value) {
    if (value) this.originalTitle = value.name;
    this.currentEstado = {...value}
  }

  @Input() form: FormGroup

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }


}
