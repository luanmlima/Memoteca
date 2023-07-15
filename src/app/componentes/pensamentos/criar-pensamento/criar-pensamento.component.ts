import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo : '',
    autoria: '',
    modelo:''
  }

  criarPensamento(){
    alert("Novo pensamento criado")
  }

  cancelarPensamento(){
    alert("Novo pensamento cancelado")
  }





}
