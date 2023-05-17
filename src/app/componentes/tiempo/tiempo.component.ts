import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario!: FormGroup; // Declaramos un objeto formulario de tipo FormGroup de Angular previamente importado, se le deberá introducir el ! al final en las últimas versiones de TS
  tiempo: any;
  name: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  fecha: Date = new Date(); // Guarda la fecha actual

  showError!: boolean;
  mensajeError!: string;

  constructor(private fb: FormBuilder, private _tiempo: TemperaturaService) { // Inyectaremos en el constructor un FormBuilder de Angular previamente importado y el servicio temperatura para usar sus métodos
    this.iniciaFormulario();
  } 

  ngOnInit(): void {
  }

  iniciaFormulario(){ // Creamos un método para crear e iniciar un formulario, se incluirá en el código del constructor para inicializar un formulario

    this.formulario = this.fb.group({ // group agrupa los distintos controles que tenga el formulario, cada campo tendrá un array con el nombre por defecto
      ciudad: ['', [Validators.required, Validators.pattern('[a-zA-Z]*$')] ], // El módulo validators lo utilizaremos para establecer reglas en los campos, por ejemplo required el para hacer que un campo sea obligatorio de rellenar, en pattern hemos incluido una expresión regular para solo permitir letras en ese campo
      codigo: ['', [Validators.required, Validators.pattern('[a-zA-Z]*$')] ]  // Si hay más de una validación se deberán colocar juntas en un array con []
    }) 

  }

  consultar(){
    this.showError = false;
    console.log("Formulario: ", this.formulario); // Imprimir por consola el objeto formulario

    // Cuando se realice la petición http al clickar el submit y se utilice la funcion getEstadoTiempo con los valores de ciudad y código, se guardarán los valores en la variable llamada 'respuesta' gracias a la suscripción que hacemos hacia dicha peticion
    this._tiempo.getEstadoTiempo(this.formulario.get('ciudad')?.value,this.formulario.get('codigo')?.value) 
      .subscribe(respuesta => {

        this.tiempo = respuesta;
        this.name = this.tiempo.name;
        this.temperatura = this.tiempo.main.temp;
        this.humedad = this.tiempo.main.humidity;
        this.latitud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;

        console.log("respuesta: ", respuesta);
      },
      error => {
        this.showError = true;
        this.mensajeError = "Error al consultar el tiempo. Inténtelo de nuevo!"
      })
  }

}
