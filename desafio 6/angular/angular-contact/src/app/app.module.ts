import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContatoService } from './contato.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
