import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  ra: number = 0;
  nome: string = '';
  email: string = '';
  celular: string = '';

  ngOnInit(): void {}
}
