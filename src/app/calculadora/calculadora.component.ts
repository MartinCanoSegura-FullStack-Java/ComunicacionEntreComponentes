import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  
  titulo = 'Calculadora';

  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  constructor(){
  }

  ngOnInit(): void {      
  }

  recibirTecla1(e: any){
    this.num1 = +e.target.value;
  }

  recibirTecla2(e: any){
    this.num2 = +e.target.value;
  }

  calcular(operdor: string) {
    switch (operdor) {
      case 's':
        this.total = this.num1 + this.num2;
        break;
      case 'r':
        this.total = this.num1 - this.num2;
        break;
      case 'm':
        this.total = this.num1 * this.num2;
        break;
      case 'd':
        this.total = this.num1 / this.num2;
        break;
      case 'w':
        this.total = this.num1 % this.num2;
        break;
      default:
        break;
    }
  }

}
