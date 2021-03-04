import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  currencies = [
    {
      icon: "gbp",
      name: 'GBP', 
    },
    {
      icon: "usd",
      name: 'USD',
    },
    {
      icon: "inr",
      name: 'INR',
    },
    {
      icon: "eur",
      name: 'EUR',
    }
  ]
  selectedCurrencySend = "usd";
  selectedCurrencyReceive = "gbp";
  faLongArrowAltDown = faLongArrowAltDown;
  faLongArrowAltUp = faLongArrowAltUp
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 40,
    stagePadding: 30,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
    responsive: {
      0: {
        items: 1,
        margin: 20,
        stagePadding: 10,
        nav: true
      },
      400: {
        items: 2,
        margin: 20,
        stagePadding: 10,
      },
      740: {
        items: 3
      },
      1600: {
        items: 4
      },
      2000: {
        items: 5
      }
    },
    nav: false
  }
  platforms = [
    {
      id: '1',
      src: '../../assets/monzo_logo.png',
      type: 'Cheapest',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592,
      content: "Monzo"
    },
    {
      id: '2',
      src: '../../assets/paypal_logo.png',
      type: 'Best',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592
    },
    {
      id: '3',
      src: '../../assets/monzo_logo.png',
      type: 'Fastest',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592
    },
    {
      id: '4',
      src: '../../assets/paypal_logo.png',
      type: 'Fastest',
      reciepient_amount: 678.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 0,
      fx_rate: 1.3592,
      content: "Paypal"
    },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeCurrency() {
    var dummy = this.selectedCurrencySend;
    this.selectedCurrencySend = this.selectedCurrencyReceive
    this.selectedCurrencyReceive = dummy
  }
  openDialog(): void {
    this.dialog.open(RegisterComponent, {
      panelClass: 'styled-dialog'
    });
  }
}
