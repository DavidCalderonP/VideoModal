import { Component, OnInit } from '@angular/core';
import {Lista} from "../../models/lista";

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  informacion!: Lista;
  constructor() {
  }

  ngOnInit(): void {
  }

  agregar(elemento: Lista):void{
    console.log("Recibiendo en el padre: ", elemento)
    this.informacion = elemento;
  }

}
