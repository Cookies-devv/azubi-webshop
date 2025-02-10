import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Produkt {
  bildUrl: string;
  beschreibung: string;
  preis: number;
}

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {

  @Input({ required: true }) produkt!: Produkt;

  //deklaratioon der Variablen
  warenkorbbuttomCklicked: boolean = true; 
  counter: number = 0;

  warenkorbclicked()
  {
    if (this.warenkorbbuttomCklicked)
    {
      this.counter ++;
    }

  }
}