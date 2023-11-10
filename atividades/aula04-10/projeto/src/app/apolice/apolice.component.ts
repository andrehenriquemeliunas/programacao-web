import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorA: number = 0;
  total: number = 0;

  ngOnInit(): void {

  }

  resultado() {
    if (this.sexo == 'M' && this.idade <= 25) this.total = this.valorA * 0.15;
    if (this.sexo == 'M' && this.idade > 25) this.total = this.valorA * 0.10;
    if (this.sexo == 'F') this.total = this.valorA * 0.08;
  }
}
