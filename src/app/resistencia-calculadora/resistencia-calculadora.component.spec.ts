import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaCalculadoraComponent } from './resistencia-calculadora.component';

describe('ResistenciaCalculadoraComponent', () => {
  let component: ResistenciaCalculadoraComponent;
  let fixture: ComponentFixture<ResistenciaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResistenciaCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
