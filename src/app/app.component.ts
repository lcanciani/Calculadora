import { Component } from '@angular/core';
import { OperandoModels } from './app.operandoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  resultado:number;
  onOperadoresArray(op :OperandoModels){
    this.resultado = op.operandoA + op.operandoB;
  }
 
}
