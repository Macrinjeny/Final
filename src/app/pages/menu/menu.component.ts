import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal for the popup
import { PopupComponent } from '../../popup/popup.component';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isScreenBelow520px: boolean = false;
  modalRef : any;

  ngOnInit() {
    // Add any initialization logic you need here
    console.log('MenuComponent initialized');

    this.checkScreenWidth();
    window.addEventListener('resize', () => this.checkScreenWidth());
  }

  checkScreenWidth() {
    this.isScreenBelow520px = window.innerWidth <= 520;
  }


  sampleArr = [
    { id: 1, name: 'Samosa', image: window.origin +'/assets/images/samosa.jpg', price: 50, value: 1, showAddForm: false },
    { id: 2, name: 'Puff', image: window.origin + '/assets/images/puff.jpg', price: 50, value: 1, showAddForm: false },
    { id: 3, name: 'Lays', image: window.origin + '/assets/images/lays1.jpg', price: 50, value: 1, showAddForm: false },
    { id: 4, name: 'Pizza', image: window.origin + '/assets/images/pizza.jpg', price: 50, value: 1, showAddForm: false },
    { id: 5, name: 'Burger', image: window.origin + '/assets/images/burger1.jpg', price: 50, value: 1, showAddForm: false },
  ]

  addArr = [
    { id: 1, name: '7UP', image: window.origin +'/assets/images/7up.jpg', price: 50, value: 1, showAddForm: false },
    { id: 2, name: 'Badham Milk', image: window.origin + '/assets/images/BadamMilk.jpg', price: 50, value: 1, showAddForm: false },
    { id: 3, name: 'Rose Milk', image: window.origin + '/assets/images/rosemilk.jpeg', price: 50, value: 1, showAddForm: false },
    { id: 4, name: 'Pepsi', image: window.origin +'/assets/images/pepsi.jpeg', price: 50, value: 1, showAddForm: false },
    { id: 5, name: 'Slice', image: window.origin + '/assets/images/Mango juice.jpg', price: 50, value: 1, showAddForm: false },
  ]

  cart: any[] = []; // Initialize an empty cart array
  
  /*showAddForm: boolean = false;
  value: number = 0;*/
  showAddForm: boolean = false;
  showAdditional: boolean = false; // Add this property to control the visibility of the additional array

  toggleAddForm(item: any) {
    // item.showAddForm = !item.showAddForm;
    if(item.showAddForm = !item.showAddForm){
      this.openPopup(`Added ${item.name} to the cart.`, item.value, item.price);

    }
    else{
      this.modalRef.close();
    }
    // this.openPopup(`Added ${item.name} to the cart.`, item.value, item.price);
  }

  toggleAdditional() {
    this.showAdditional = !this.showAdditional;
  }

  handlePlus(item: any) {
      if (item.value <= 1) {
          item.value = 1;
      }
    item.value++;

    if (item.value >= 1) {
      item.showAddForm = true;
      this.cart.push(item);
      this.openPopup(`Added ${item.name} to the cart.`, item.value, item.price);
    }
  
  }

handleMinus(item: any) {
  if (item.value >= 1) {
    item.value--;
  }

  if(item.value == 0){
    this.modalRef.close();
    item.showAddForm = false;
    this.openPopup(`Removed one ${item.name} from the cart.`, item.value, item.price); 

  }
}

// carouselConfig = {
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   infinite: true,
//   arrows: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 520,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

openPopup(message: string, quantity: number, price: number) {
  this.modalRef = this.modalService.open(PopupComponent);
  this.modalRef.componentInstance.message = message;
  this.modalRef.componentInstance.quantity = quantity;
  this.modalRef.componentInstance.price = price;


  // setTimeout(() => {
  //   modalRef.close();
  // }, 2000); 
}



constructor(private modalService: NgbModal, private router: Router) {
  console.log(this.sampleArr);
}

navigateToCart() {
  if (this.isScreenBelow520px) {
    this.router.navigate(['/cart']);
  }
}

openModal(content: any) {
  this.modalService.open(content, { centered: true });
}
}