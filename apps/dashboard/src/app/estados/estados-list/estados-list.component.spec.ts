import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosListComponent } from './estados-list.component';

describe('EstadosListComponent', () => {
  let component: EstadosListComponent;
  let fixture: ComponentFixture<EstadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
