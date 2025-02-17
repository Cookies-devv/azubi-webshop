import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { productMock } from './product.mock';
import { WarenkorbService } from './services/warenkorb/warenkorb.service';
import {CommonModule, JsonPipe, NgFor, NgForOf} from '@angular/common';
import { Produkt } from './product-card/product_interface';
import { WarenkorbComponent } from "./warenkorb/warenkorb.component";


@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, WarenkorbComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
})
export class AppComponent implements OnInit {

  title = 'azubi-webshop';
  products: Produkt[] = productMock;
  warenkorbProduct: Produkt[] = [];
 warenkorbService: WarenkorbService = inject(WarenkorbService);
 isWarenkorbVisible = false;
 isExpand = false;

  ngOnInit(): void {
    this.warenkorbProduct = this.warenkorbService.warenkorb;
    this.isExpand = false;
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

  toggleWarenkorbVisibility() {
    this.isWarenkorbVisible = !this.isWarenkorbVisible;
  }

  toggleWarenkorb() {
    this.isExpand = !this.isExpand;
    console.log("Warenkorb Status:", this.isExpand);
  }
  
}
