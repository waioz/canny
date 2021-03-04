import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  slideNumber=1;
  leftValue;
  constructor() { }

  ngOnInit(): void {
  }

  goto_next(value) {
    console.log(value)
    this.slideNumber = value+1;
    this.leftValue = 'translateX(-'+parseInt(value) * 100+"%)";
  }
  goto_back(value) {
    console.log(value)
    var new_id = ((value - 1) * 100) - 100;
    this.slideNumber = value-1;
    this.leftValue = 'translateX(-' + new_id + "%)";
  }

}
