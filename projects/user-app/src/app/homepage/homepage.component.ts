import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  selectedCurrencySend = {
    icon: "usd",
    name: 'USD',
    symbol: '$'
  };
  selectedCurrencyReceive = {
    icon: "eur",
    name: 'EUR',
    symbol: '€'
  };
  currencies = [
    {
      icon: "gbp",
      name: 'GBP', 
      symbol: '£'
    },
    {
      icon: "usd",
      name: 'USD',
      symbol: '$'
    },
    {
      icon: "inr",
      name: 'INR',
      symbol: '₹'
    },
    {
      icon: "eur",
      name: 'EUR',
      symbol: '€'
    }
  ]
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
      reciepient_amount: 675.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 1,
      fx_rate: 1.3592,
      content: "Monzo"
    },
    {
      id: '2',
      src: '../../assets/paypal_logo.png',
      type: 'Best',
      reciepient_amount: 676.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 3,
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
      commision_percentage: 4,
      fx_rate: 1.3592
    },
    {
      id: '4',
      src: '../../assets/paypal_logo.png',
      type: 'Fastest',
      reciepient_amount: 686.29,
      reciepient_percentage: 24.2,
      day: '1 day',
      commision_fee: 2.3,
      commision_percentage: 5,
      fx_rate: 1.3972,
      content: "Paypal"
    },
  ]
  sortedData;
  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.sortedData = this.platforms.slice();
    this.router.events.subscribe(() => {
      this.dialog.closeAll()
    });
  }
  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.icon === o2.icon && o1.symbol === o2.symbol;
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
  sortData(sort: Sort) {
    console.log(sort);
    const data = this.platforms.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fx_rate': return compare(a.fx_rate, b.fx_rate, isAsc);
        case 'commision_percentage': return compare(a.commision_percentage, b.commision_percentage, isAsc);
        case 'recipient': return compare(a.reciepient_amount, b.reciepient_amount, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}