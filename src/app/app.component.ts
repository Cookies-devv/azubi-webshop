import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { productMock } from './product.mock';
import { WarenkorbService } from './services/warenkorb/warenkorb.service';
import {CommonModule, JsonPipe, NgFor, NgForOf} from '@angular/common';
import { Produkt } from './product-card/product_interface';
import { WarenkorbComponent } from "./warenkorb/warenkorb.component";
import { ProfilePopupComponent } from "./profile-popup/profile-popup.component";


@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, WarenkorbComponent, CommonModule, ProfilePopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
})

export class AppComponent implements OnInit {
[x: string]: any;

  title = 'azubi-webshop';
  products: Produkt[] = productMock;
  warenkorbProduct: Produkt[] = [];
 warenkorbService: WarenkorbService = inject(WarenkorbService);
 isWarenkorbVisible = true;
 isExpand = false;

  ngOnInit(): void {
    this.warenkorbProduct = this.warenkorbService.warenkorb;
    this.isExpand = false;
  }
  
  warenkorbSchliessen(){
    this.isExpand = false;
    this.isWarenkorbVisible = true;
  }

  toggleWarenkorb() {
    this.isExpand = !this.isExpand;
    console.log("Warenkorb Status:", this.isExpand);
    this.isWarenkorbVisible = !this.isWarenkorbVisible;
  }
  
}
