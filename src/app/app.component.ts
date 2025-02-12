import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { productMock } from './product.mock';
import { WarenkorbService } from './services/warenkorb/warenkorb.service';
import {JsonPipe, NgFor, NgForOf} from '@angular/common';
import { Produkt } from './product-card/product_interface';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WarenkorbService]
})
export class AppComponent implements OnInit {
  title = 'azubi-webshop';
  products: Produkt[] = productMock;
  warenkorbProduct: Produkt[] = [];
 warenkorbService: WarenkorbService = inject(WarenkorbService);

  ngOnInit(): void {
    this.warenkorbProduct = this.warenkorbService.warenkorb;
  }

  warenkorbClicked(productMock: Produkt) {
    this.warenkorbService.addWarenkorb(productMock);
  }

  anzahlerNiedrigen(productId: string): void {
    this.warenkorbService.anzahlerniedrigen(productId);
  }

  anzahlErhoehen(productId: string): void {
    this.warenkorbService.anzahlErhoehen(productId);
  }

  profilClicked() {
    alert('Profil');
  }

  einkaufeClicked() {
    alert('Einkaufen Fenster');
  }

  logoutClicked() {
    alert('Logout Fenster');
  }
}
