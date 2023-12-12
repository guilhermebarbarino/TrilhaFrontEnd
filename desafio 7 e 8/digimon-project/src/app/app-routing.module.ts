import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonDisplayComponent } from './digimon-display/digimon-display.component';


const routes: Routes = [
  { path: '', component: DigimonDisplayComponent },
  
  { path: 'digimon/:id', component: DigimonDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }