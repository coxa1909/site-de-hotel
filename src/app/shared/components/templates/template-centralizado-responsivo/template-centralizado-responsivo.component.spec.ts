import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCentralizadoResponsivoComponent } from './template-centralizado-responsivo.component';

describe('TemplateCentralizadoResponsivoComponent', () => {
  let component: TemplateCentralizadoResponsivoComponent;
  let fixture: ComponentFixture<TemplateCentralizadoResponsivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCentralizadoResponsivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCentralizadoResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
