import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  currencies: string[] = ['GBP', 'USD', 'INR']
  selectedCurrencySend = "USD";
  selectedCurrencyReceive = "GBP";
  faLongArrowAltDown = faLongArrowAltDown;
  faLongArrowAltUp = faLongArrowAltUp
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,
    margin: 40,
    stagePadding: 30,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  platforms = [
    {
      id: 1,
      src: 'canny/dist/user-app/assets/monzo_logo.png',
      type: 'Cheapest',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592
    },
    {
      id: 2,
      src: 'canny/dist/user-app/assets/paypal_logo.png',
      type: 'Best',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592
    },
    {
      id: 3,
      src: 'canny/dist/user-app/assets/monzo_logo.png',
      type: 'Fastest',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592
    },
    {
      id: 4,
      src: 'canny/dist/user-app/assets/paypal_logo.png',
      type: 'Fixed',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeCurrency() {
    var dummy = this.selectedCurrencySend;
    this.selectedCurrencySend = this.selectedCurrencyReceive
    this.selectedCurrencyReceive = dummy
  }

}
