import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversaoTemperaturaComponent } from './conversao-temperatura/conversao-temperatura.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ImcCalculatorComponent } from './imc-calculator/imc-calculator.component';
import { AppRoutingModule } from './app-routing.module'; // Importar o módulo de roteamento

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    ConversaoTemperaturaComponent,
    ApoliceSeguroComponent,
    ImcCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
