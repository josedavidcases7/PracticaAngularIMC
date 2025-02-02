import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-formulario-persona',
  imports: [],
  templateUrl: './formulario-persona.component.html',
  styleUrl: './formulario-persona.component.scss'
})
export class FormularioPersonaComponent implements AfterViewInit{
  constructor(private hostElement: ElementRef) {}
  @ViewChild('sumarPeso') botonSumarPeso!: ElementRef<HTMLButtonElement>;
  @ViewChild('restarPeso') botonRestarPeso!: ElementRef<HTMLButtonElement>;
  @ViewChild('peso') inputPeso!: ElementRef<HTMLInputElement>;
  @ViewChild('sumarAltura') botonSumarAltura!: ElementRef<HTMLButtonElement>;
  @ViewChild('restarAltura') botonRestarAltura!: ElementRef<HTMLButtonElement>;
  @ViewChild('altura') inputAltura!: ElementRef<HTMLInputElement>;
  @ViewChild('limpiar') botonLimpiar!: ElementRef<HTMLButtonElement>;
  @ViewChild('sexo') inputSexo!: ElementRef<HTMLInputElement>;
  @ViewChild('nombre') inputNombre!: ElementRef<HTMLInputElement>;
  @ViewChild('btnCalcular') btnCalcular!: ElementRef<HTMLButtonElement>;
  @ViewChild('resultado') resultado!: ElementRef<HTMLSpanElement>;
  @Output() nuevaPersona = new EventEmitter<Persona>();
  ngAfterViewInit() {
    
    this.botonSumarPeso.nativeElement.onclick = () => {
        let peso:number = parseInt(this.inputPeso.nativeElement.value);
        if(peso < 3){
          this.inputPeso.nativeElement.value = "3";
        }else{
          peso = peso+1;
          this.inputPeso.nativeElement.value = peso.toString();
        }
    };

    this.botonRestarPeso.nativeElement.onclick = () => {
      let peso:number = parseInt(this.inputPeso.nativeElement.value);
      if(peso > 3){
        peso = peso-1;
        this.inputPeso.nativeElement.value = peso.toString();
      }else{
        this.inputPeso.nativeElement.value = "3";
      }
  };

  this.botonSumarAltura.nativeElement.onclick = () => {
    let altura:number = parseInt(this.inputAltura.nativeElement.value);
    if(altura < 50){
      this.inputAltura.nativeElement.value = "50";
    }else{
      altura = altura+1;
      this.inputAltura.nativeElement.value = altura.toString();
    }
};
this.botonRestarAltura.nativeElement.onclick = () => {
  let altura:number = parseInt(this.inputAltura.nativeElement.value);
  if(altura <= 50){
    this.inputAltura.nativeElement.value = "50";
  }else{
    altura = altura-1;
    this.inputAltura.nativeElement.value = altura.toString();
  }
};

this.botonLimpiar.nativeElement.onclick = () => {
  this.inputNombre.nativeElement.value = "";
  this.inputSexo.nativeElement.checked = true;
  this.inputPeso.nativeElement.value = "70";
  this.inputAltura.nativeElement.value = "170";
}

this.btnCalcular.nativeElement.onclick = () => {
  
  let persona: Persona = this.obtenerPersona();
  this.resultado.nativeElement.textContent = persona.imc;

  this.nuevaPersona.emit(persona);
}



    
  }


  obtenerPersona(): Persona{
    let nombre: string = this.inputNombre.nativeElement.value;
    let sexo: string = this.inputSexo.nativeElement.value;
    let peso: number = parseInt( this.inputPeso.nativeElement.value);
    let altura: number = parseInt(this.inputAltura.nativeElement.value);
    let imc: string = this.calcularIMC(peso,altura);

    let persona = new Persona(nombre,sexo,peso,altura,imc);
    return persona;
  }


  calcularIMC(peso:number, altura: number): string {
   


    const alturaM: number = altura / 100;

    const imc: number = peso / (alturaM * alturaM);

    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
}
