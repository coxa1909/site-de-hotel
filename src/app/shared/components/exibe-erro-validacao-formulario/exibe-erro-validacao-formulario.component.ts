import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-exibe-erro-validacao-formulario',
  templateUrl: './exibe-erro-validacao-formulario.component.html',
  styleUrls: ['./exibe-erro-validacao-formulario.component.css']
})
export class ExibeErroValidacaoFormularioComponent implements OnInit {

  @Input() texto: string = 'Desenvolvedor, você deve adicionar um texto'

  constructor() { }

  ngOnInit(): void {
  }

}
