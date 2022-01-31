import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Lista} from "../../models/lista";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnChanges {

  // @Input() set info(infor: Lista){
  //   if (infor){
  //     this.data.push(infor);
  //   }
  // };
  @Input() info: Lista;
  data: Lista[];
  constructor() {
    this.data = [];
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("Changes")
    if (this.info){
      this.data.push(this.info)
    }
  }

}
