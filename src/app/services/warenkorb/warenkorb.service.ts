import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produkt } from '../../product-card/product_interface';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  warenkorb: Produkt[] = [];

  constructor() { }

  addWarenkorb(product: Produkt): void {
    if (!this.warenkorb.some(p => p.id === product.id)) {
      this.warenkorb.push(product);
    }
    this.anzahlErhoehen(product.id);
    console.log(this.warenkorb);
  }

  anzahlErhoehen(id: string) {
    for (let i = 0; i < this.warenkorb.length; i++) {
      if (this.warenkorb[i].id == id) {
        this.warenkorb[i].anzahl++;
      }
    }
  }

  getWarenkorb(): Produkt[] {
    return this.warenkorb;
  }

  anzahlerniedrigen(id: string) {
    for (let i = 0; i < this.warenkorb.length; i++) {
      if (this.warenkorb[i].id == id) {
        this.warenkorb[i].anzahl--;
      }
      if (this.warenkorb[i].anzahl == 0) {
        this.removeFromWarenkorb(this.warenkorb[i].id);
      }
    }
  }

  removeFromWarenkorb(productId: string): void {

    for (let i = 0; i < this.warenkorb.length; i++) {
      if (this.warenkorb[i].id === productId) {
        this.warenkorb.splice(i, 1);
      }
    }
  }




}
