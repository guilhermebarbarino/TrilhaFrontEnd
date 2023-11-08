import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss'],
})
export class TestesPipeComponent {
  dataEvento: any = new Date().setUTCFullYear(2021, 10, 21);
  preco: number = 35.0;
  ingressos: number = 0.8465;
  cpf: string = "12345678901";
  cnpj: string = "12345678901234";
}
