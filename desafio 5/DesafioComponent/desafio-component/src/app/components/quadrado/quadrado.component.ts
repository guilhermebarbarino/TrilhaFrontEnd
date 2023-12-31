import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent {

  valor:number = 0;

  constructor(private router:Router){
    this.valor = this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
  }
}
