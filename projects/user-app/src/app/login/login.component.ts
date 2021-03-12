import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../common.service';
import { RegisterComponent } from '../homepage/register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(public dialog: MatDialog, public commonService: CommonService) { 
    this.commonService.register_data.subscribe((data) => {
      if(data == 'login') {
        this.dialog.closeAll()
      }
    })
  }

  ngOnInit(): void {
  }
  openDialog(): void {
    this.dialog.open(RegisterComponent, {
      panelClass: 'styled-dialog'
    });
    this.commonService.currentPage('login')
  }
}
