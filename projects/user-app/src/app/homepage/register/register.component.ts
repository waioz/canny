import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CommonService } from '../../common.service';

interface Category {
  id: string,
  name: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  slideNumber=1;
  leftValue;
  ubo=[];
  directors=[]
  categories: Category[]= [{name: 'Category 1', id: 'A'}, {name: 'Category 2', id: 'B'}, {name: 'Category 3', id: 'C'}];
  public driverCtrl: FormControl = new FormControl();
  public categoryFilterCtrl: FormControl = new FormControl();
  public filteredCategories: ReplaySubject<Category[]> = new ReplaySubject<Category[]>(1);
  private _onDestroy = new Subject<void>();
  @ViewChild('singleSelect') singleSelect: MatSelect;

  constructor(public commonService: CommonService, public router: Router) { 
    this.commonService.page_data.subscribe((data) => {
      if(data == 'login') {
        this.goto_next(3);
      }
    })
  }

  ngOnInit(): void {
    this.filteredCategories.next(this.categories.slice());
      // listen for search field value changes
    this.categoryFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterCategories();
    });
    this.directors = [
      {
        name: "BAILEY, Geoge Nicholas",
        address: "26, Western Way United Kingdom, Ryton.",
        zipcode: "NE40 3LR",
        me: "false",
        class: 'bg-orange'
      },
      {
        name: "GILMORE, Lesley Edna",
        address: "1, Garen Terrace, England",
        zipcode: "NE40 3NG",
        me: "false",
        class: 'bg-light-orange'
      },
      {
        name: "GILMORE, Lesley Edna",
        address: "1, Garen Terrace, England",
        zipcode: "NE40 3NG",
        me: "false",
        class: 'bg-blue'
      },
      {
        name: "BAILEY, Geoge Nicholas",
        address: "26, Western Way United Kingdom, Ryton.",
        zipcode: "NE40 3LR",
        me: "false",
        class: 'bg-orange'
      },
      {
        name: "GILMORE, Lesley Edna",
        address: "1, Garen Terrace, England",
        zipcode: "NE40 3NG",
        me: "false",
        class: 'bg-orange'
      }
    ]
    this.ubo = [
      {
        name: "BAILEY, Geoge Nicholas",
        address: "26, Western Way United Kingdom, Ryton.",
        zipcode: "NE40 3LR",
        me: "false",
        class: 'bg-blue'
      },
      {
        name: "GILMORE, Lesley Edna",
        address: "1, Garen Terrace, England",
        zipcode: "NE40 3NG",
        me: "false",
        class: 'bg-orange'
      },
      {
        name: "GILMORE, Lesley Edna",
        address: "1, Garen Terrace, England",
        zipcode: "NE40 3NG",
        me: "false",
        class: 'bg-light-orange'
      },
      {
        name: "BAILEY, Geoge Nicholas",
        address: "26, Western Way United Kingdom, Ryton.",
        zipcode: "NE40 3LR",
        me: "false",
        class: 'bg-orange'
      },
      {
        name: "GILMORE, Lesley Edna",
        address: "1, Garen Terrace, England",
        zipcode: "NE40 3NG",
        me: "false",
        class: 'bg-orange'
      }
    ]
  }

  goto_next(value) {
    if(value == 'login') {
      this.router.navigateByUrl('/login');
      this.commonService.registerSubmit('login')
      return
    }
    this.slideNumber = value+1;
    this.leftValue = 'translateX(-'+parseInt(value) * 100+"%)";
  }
  goto_back(value) {
    var new_id = ((value - 1) * 100) - 100;
    this.slideNumber = value-1;
    this.leftValue = 'translateX(-' + new_id + "%)";
  }

  protected filterCategories() {
    console.log('this.filteredCategories');
    if (!this.categories) {
      return;
    }
    // get the search keyword
    let search = this.categoryFilterCtrl.value;
    if (!search) {
      this.filteredCategories.next(this.categories.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the categories
    this.filteredCategories.next(
      this.categories.filter(category => category.name.toLowerCase().indexOf(search) > -1)
    );
    console.log(this.filteredCategories);
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  protected setInitialValue() {
    this.filteredCategories
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: Category, b: Category) => a && b && a.id === b.id;
      });
  }
}
