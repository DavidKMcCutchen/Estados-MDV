import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estado } from "@estados/api-interfaces";

@Component({
  selector: 'estados-estados-list',
  templateUrl: './estados-list.component.html',
  styleUrls: ['./estados-list.component.scss']
})
export class EstadosListComponent {
  @Input() estados: Estado[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  }
