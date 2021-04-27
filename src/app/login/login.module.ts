import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateCentralizadoResponsivoModule } from '../shared/components/templates/template-centralizado-responsivo/template-centralizado-responsivo.module';
import { ExibeErroValidacaoFormularioModule } from '../shared/components/exibe-erro-validacao-formulario/exibe-erro-validacao-formulario.module';



@NgModule({
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  imports: [
    CommonModule,
    TemplateCentralizadoResponsivoModule,
    FormsModule,
    ReactiveFormsModule,
    ExibeErroValidacaoFormularioModule
  ]
})
export class LoginModule { }
