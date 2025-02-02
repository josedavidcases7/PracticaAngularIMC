export class Persona {
    nombre: string;
    genero: string;
    peso: number;
    altura: number;
    imc: string;

    constructor(nombre: string, genero: string, peso: number, altura: number, imc: string) {
      this.nombre = nombre;
      this.genero = genero;
      this.peso = peso;
      this.altura = altura;
      this.imc = imc;
    }
  }