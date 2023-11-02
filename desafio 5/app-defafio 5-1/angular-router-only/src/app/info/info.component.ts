import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  nome: string = 'Guilherme da silva';
  nomeGuia: string = 'Bonnano';
  dataHoje: Date = new Date();
}
