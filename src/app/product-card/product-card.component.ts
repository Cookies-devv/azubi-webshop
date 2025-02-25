import { DecimalPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  @Input({ required: true }) produkt!: Produkt;
  warenkorbService: WarenkorbService = inject(WarenkorbService);
  currentIndex: number = 0;

  constructor(private warenkorbServices: WarenkorbService, private dialog: MatDialog) {}

  warenkorbclicked() {
    this.warenkorbServices.addWarenkorb(this.produkt);
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
