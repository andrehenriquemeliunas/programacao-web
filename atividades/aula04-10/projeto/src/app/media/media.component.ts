import { formatNumber } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: string;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ){}


  calcular(){


    this.resultado = formatNumber((this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45),this.locale, '1.2-2');
  }
}
