import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalPersonalizadoComponent} from "./components/modal-personalizado/modal-personalizado.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  operaciones : any[];
  constructor(private dialog: MatDialog){
    const semilla = 100;
    this.operaciones = [
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '**'
      },
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '/'
      },
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '-'
      },
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '**'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '/'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '+'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '*'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '-'
      },
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '/'
      },
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '/'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '+'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '*'
      },{
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '+'
      },
      {
        n1: Math.round(Math.random()*semilla),
        n2: Math.round(Math.random()*semilla),
        operator: '*'
      }
    ]
  }

  ngOnInit(){}

  finalizo(event: string){
    console.log(event)
  }

  opeModal(){
    const modal = this.dialog.open(ModalPersonalizadoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'custom-dialog-container'
    });
  }
}
