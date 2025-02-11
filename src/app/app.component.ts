import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent, Produkt } from './product-card/product-card.component';
import { productMock } from './product.mock';
import { WarenkorbService } from './services/warenkorb/warenkorb.service'; 
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WarenkorbService]
})
export class AppComponent implements OnInit {
  title = 'azubi-webshop';
  products: Produkt[] = productMock;
  warenkorbProduct: Produkt[] = [];


  constructor(private warenkorbService: WarenkorbService) { }
  ngOnInit(): void {
    this.warenkorbProduct = this.warenkorbService.warenkorb;
  }


  warenkorbClicked(productMock: Produkt) {
    this.warenkorbService.addWarenkorb(productMock);
  }

  removeFromWarenkorb(productId: string): void {
    this.warenkorbService.removeFromWarenkorb(productId);
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
