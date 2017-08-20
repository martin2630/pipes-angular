import { Component } from '@angular/core';
import { LOCALE_ID } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public nombre = 'martin';

  nombre2 = "martin aldair castillo campo";

  arreglo = [1,2,3,4,5,6,7,8,9];

  public PI: number = Math.PI;

  a: number = 0.234;

  salario: number = 1234.5

  heroe = {
    nombre: "logan",
    edad: 15,
    direccion: "ref 102 mza 70 lt 23",
    id: "wolverine"
  }

  valorPromesa = new Promise ( (resolve, reject) => {
    setTimeout(()=>resolve("llego la data"), 3500);
  });

  date = new Date();

  video = 'vPFB0rM1Xxk';
  activar: boolean;


  constructor() {
    this.activar = true;
  }

}
