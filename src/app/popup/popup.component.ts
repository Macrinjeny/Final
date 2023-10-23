import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() message: string = '';
  @Input() quantity: number = 0;
  @Input() price: number = 0;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  navigateToCart() {
    this.activeModal.close(); // Close the popup
    this.router.navigate(['/cart']); // Navigate to the cart page
  }
}
