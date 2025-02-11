import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WarenkorbService } from '../services/warenkorb/warenkorb.service';
import { Produkt } from './product_interface';

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

  constructor(private warenkorbServices: WarenkorbService) {}


  warenkorbclicked()
  {
    if (this.warenkorbbuttomCklicked)
    {
      this.counter ++;
      this.warenkorbServices.addWarenkorb(this.produkt);
    }

  }
}
