import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports:[CommonModule],
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrl: './profile-popup.component.scss'
})
export class ProfilePopupComponent {
  isVisible = false;

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
}



