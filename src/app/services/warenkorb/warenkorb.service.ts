import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

    for (product of this.warenkorb) {
      
    }
  }

  getWarenkorb() : Produkt[] {
    return this.warenkorb;
  }

  removeFromWarenkorb(productId: string): void {
    const newWarenkorb: Produkt[] = [];
    
    for (let i = 0; i < this.warenkorb.length; i++) {
      if (this.warenkorb[i].id !== productId) {
        newWarenkorb.push(this.warenkorb[i]);
      }
    }
    
    this.warenkorb = newWarenkorb;
  }



  
}
