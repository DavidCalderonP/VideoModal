import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Lista} from "../../models/lista";

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo!: string;
  descripcion!: string;
  @Output() data: EventEmitter<Lista>;

  constructor() {
    this.data = new EventEmitter<Lista>();
  }

  ngOnInit(): void {
  }

  enviarDatos(){
    if(this.titulo !='' && this.descripcion !=''){
      const x = {
        titulo: this.titulo,
        descripcion: this.descripcion
      };
      console.log("Enviando del origen: ", x)
      this.data.emit(x)
    }
  }
}


