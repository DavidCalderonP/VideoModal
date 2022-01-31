import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Input() n1: number;
  @Input() n2: number;
  @Input() operator: string;
  result: number;

  constructor() {
    this.n1 = 0;
    this.n2 = 0;
    this.result = 0;
    this.operator = '+'; //Por defecto va a ser una suma
  }

  ngOnInit(): void {
    console.log(this.n1, this.operator, this.n2)
  }

  calcular(){
    switch (this.operator){
      case '/':
        if(!this.n2){
          this.result = Infinity;
          break;
        }
        this.result = +(this.n1 / this.n2).toFixed(2);
        break;
      case '*':
        this.result = this.n1 * this.n2;
        break;
      case '**':
        this.result = this.n1 ** this.n2;
        break;
      case '-':
        this.result = this.n1 - this.n2;
        break;
      case '+':
        this.result = this.n1 + this.n2;
        break;
      default:
        this.result = NaN;
    }
  }


}
