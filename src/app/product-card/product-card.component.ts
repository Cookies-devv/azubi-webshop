import { DecimalPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { WarenkorbService } from '../services/warenkorb/warenkorb.service';
import { Produkt } from './product_interface';

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
[x: string]: any;

  @Input({ required: true }) produkt!: Produkt;
  warenkorbService: WarenkorbService = inject(WarenkorbService);

  //deklaratioon der Variablen
  warenkorbbuttomCklicked: boolean = true; 


  constructor(private warenkorbServices: WarenkorbService) {}


  warenkorbclicked()
  {
    if (this.warenkorbbuttomCklicked)
    {
      this.warenkorbServices.addWarenkorb(this.produkt);
    }

  }
}
