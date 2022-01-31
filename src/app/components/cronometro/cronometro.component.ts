import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;
  msg: string;
  @Input() tiempo!: number;
  @Output() avisar: EventEmitter<string>;

  constructor() {
    this.contador = 10;
    this.msg = `Ha finalizado el cronometro con el tiempo: `;
    this.avisar = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.contador = this.entradaValida() ? this.tiempo : this.contador;
  }

  entradaValida():boolean{
    if(this.tiempo<0){
      console.log("menor de cero")
      return false;
    }
    if(!Number.isInteger(this.tiempo)){
      console.log("de entero")
      return false;
    }
    return true;
  }

  iniciarCronometro(){
    const interval = setInterval(()=>{
      if(this.contador<1){
        clearInterval(interval);
        this.finalizado();
        return;
      }
      this.contador--;
    },1000);
  }

  finalizado(){
    this.avisar.emit(this.msg + this.contador);
  }

}
