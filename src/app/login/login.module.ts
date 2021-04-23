import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateCentralizadoResponsivoModule } from '../shared/components/templates/template-centralizado-responsivo/template-centralizado-responsivo.module';



@NgModule({
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  imports: [
    CommonModule,
    TemplateCentralizadoResponsivoModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
