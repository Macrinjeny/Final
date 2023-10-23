import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isScreenBelow520px: boolean = false;
  cartArr : any[] = [
    { id: 1, name: 'Samosa', price: 50,  },
    { id: 2, name: 'Samosa', price: 50,  },
    { id: 3, name: 'Samosa', price: 50, },
  ]

  constructor(private router: Router) {}


  cart: any[] = [];

handlePlus(item: any) {
  item.value += 1;
}

handleMinus(item: any) {
  if (item.value > 0) {
    item.value -= 1;
  }
}

handleValueChange(item: any) {
  // You can handle value changes here, if needed
}




navigateBack() {
  this.router.navigate(['/menu']); // Navigate back to the menu page
}
}


