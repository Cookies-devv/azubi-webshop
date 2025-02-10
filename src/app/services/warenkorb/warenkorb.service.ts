import { Injectable } from '@angular/core';
import { Produkt } from '../../product-card/product-card.component';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  warenkorb: Produkt[] = [];

  constructor() { }

  addWarenkorb(product: Produkt) : void{
    this.warenkorb.push(product);
    alert("Das Produkt wurde hinzugefügt");
    console.log(this.warenkorb);
  }

  getWarenkorb() : Produkt[] {
    return this.warenkorb;
  }
}
