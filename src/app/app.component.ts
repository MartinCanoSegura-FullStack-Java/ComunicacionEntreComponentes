import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Calculadora con Comunicacion Entre Componentes';
  textFather = 'Texto enviado desde el PADRE hacia el HIJO';

  totalRecibido: number = 0;

  recibirEmision(e: any){
    this.totalRecibido = e;
  }

}
