import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioPersonaComponent } from "./formulario-persona/formulario-persona.component";
import { Persona } from './models/Persona';
import { HistorialIMCComponent } from './historial-imc/historial-imc.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioPersonaComponent, HistorialIMCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Practica1IMC';

  listaPersonas: Persona[] = [];
  agregarPersona(persona: Persona) {
    this.listaPersonas.push(persona);
  }
}


