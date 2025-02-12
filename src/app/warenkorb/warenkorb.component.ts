import { Component, inject, Input } from '@angular/core';
import { WarenkorbService } from '../services/warenkorb/warenkorb.service';
import {CommonModule, JsonPipe, NgFor, NgForOf} from '@angular/common';
import { Produkt } from '../product-card/product_interface';

@Component({
  selector: 'app-warenkorb',
  imports: [CommonModule, NgForOf],
  templateUrl: './warenkorb.component.html',
  styleUrl: './warenkorb.component.scss'
})
export class WarenkorbComponent {
  @Input() produkt!: Produkt;
    warenkorbProduct: Produkt[] = [];
   warenkorbService: WarenkorbService = inject(WarenkorbService);

  anzahlerNiedrigen(productId: string): void {
    this.warenkorbService.anzahlerniedrigen(productId);
  }

  anzahlerErhoehen(productId: string): void {
    this.warenkorbService.anzahlErhoehen(productId);
  }

    warenkorbClicked(productMock: Produkt) {
      this.warenkorbService.addWarenkorb(productMock);
    }

}
