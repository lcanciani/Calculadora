import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OperandoModels } from '../app.operandoModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  operandoA: number;
  operandoB: number;
  constructor() { }
  @Output() onEnviarOperandos = new EventEmitter<OperandoModels>();
  ngOnInit(): void {
  }
  onEnviarModel() {
    let operadores = new OperandoModels(this.operandoA, this.operandoB)
    this.onEnviarOperandos.emit(operadores)
  }
}
