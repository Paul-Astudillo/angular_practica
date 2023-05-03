import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  //styleUrls:['./main.css'],
})
export class App {
  name = 'Paul';
  cargo = 'Estudiante';

  a = 50;
  b = 0;
  c = 0;
  contador = 0;
  r=0;
  m=0;
  d=0;


  calcular() {

    console.log('hello Ups ' + this.a)
    this.contador = this.contador + 1
    this.c =0+ this.a + eval(""+this.b)
  }
  calcularResta(){
   
    this.r =this.a-this.b
  }
  calculaMultipl(){

   this.m=this.a*this.b
  }
  calculaDiv(){

    this.d=this.a/this.b
      }


}

bootstrapApplication(App);