import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDetailsComponent } from './estados-details.component';

describe('EstadosDetailsComponent', () => {
  let component: EstadosDetailsComponent;
  let fixture: ComponentFixture<EstadosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
