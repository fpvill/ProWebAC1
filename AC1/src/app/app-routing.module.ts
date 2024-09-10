import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversaoTemperaturaComponent } from './conversao-temperatura/conversao-temperatura.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ImcCalculatorComponent } from './imc-calculator/imc-calculator.component';

const routes: Routes = [
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'conversao-temperatura', component: ConversaoTemperaturaComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },
  { path: 'imc-calculator', component: ImcCalculatorComponent },
  { path: '', redirectTo: '/calcular-media', pathMatch: 'full' }, // Rota padrão
  { path: '**', redirectTo: '/calcular-media' } // Rota para páginas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
