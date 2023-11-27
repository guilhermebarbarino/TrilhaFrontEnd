import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-contact';
  

  formularioContato: FormGroup | any;

  constructor(private fb: FormBuilder, private Servico: ContatoService) {
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.formularioContato = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formularioContato?.valid) {
      this.Servico.enviarContato(this.formularioContato.value).subscribe(
        (resposta) => {
          console.log('Mensagem enviada com sucesso:', resposta);
          // Faça o que for necessário após o envio bem-sucedido
        },
        (erro) => {
          console.error('Erro ao enviar mensagem:', erro);
          // Lidar com o erro, se necessário
        }
      );
    }
  }

  menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu') as HTMLElement;
    const navigation = document.querySelector('.navigation') as HTMLElement;

    if (toggleMenu && navigation) {
      toggleMenu.classList.toggle('active');
      navigation.classList.toggle('active');
    }
  }

  changeBgColor(color: string) {
    const sec = document.querySelector('.sec') as HTMLElement;
    sec.style.background = color;
  }
}
