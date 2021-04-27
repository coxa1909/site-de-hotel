import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeErroValidacaoFormularioComponent } from './exibe-erro-validacao-formulario.component';

describe('ExibeErroValidacaoFormularioComponent', () => {
  let component: ExibeErroValidacaoFormularioComponent;
  let fixture: ComponentFixture<ExibeErroValidacaoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeErroValidacaoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeErroValidacaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
