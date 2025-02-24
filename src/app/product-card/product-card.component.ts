import { DecimalPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { WarenkorbService } from '../services/warenkorb/warenkorb.service';
import { Produkt } from './product_interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  [x: string]: any;

  @Input({ required: true }) produkt!: Produkt;
  warenkorbService: WarenkorbService = inject(WarenkorbService);

  //deklaratioon der Variablen
  warenkorbbuttomCklicked: boolean = true;
  currentIndex: number = 0;


  constructor(private warenkorbServices: WarenkorbService) { }


  warenkorbclicked() {
    if (this.warenkorbbuttomCklicked) {
      this.warenkorbServices.addWarenkorb(this.produkt);
    }

  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.produkt.bildUrl.length - 1;
    }
  }

  nextImage() {
    if (this.currentIndex < this.produkt.bildUrl.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
