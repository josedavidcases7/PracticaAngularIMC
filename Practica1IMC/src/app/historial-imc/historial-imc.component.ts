import { Component, Input } from '@angular/core';
import { Persona } from '../models/Persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial-imc',
  imports: [CommonModule],
  templateUrl: './historial-imc.component.html',
  styleUrl: './historial-imc.component.scss'
})
export class HistorialIMCComponent {

  @Input() personas: Persona[] = [];
}
