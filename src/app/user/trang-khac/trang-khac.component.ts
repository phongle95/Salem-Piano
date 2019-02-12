import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { User } from 'src/app/admin/extral-admin/model/user';
import { LoginCookie } from 'src/app/admin/extral-admin/common/login-cookie';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-trang-khac',
  templateUrl: './trang-khac.component.html',
  styleUrls: ['./trang-khac.component.scss']
})
export class TrangKhacComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private loginCookie: LoginCookie,
  ) {

  }

  ngOnInit() {

  }
  
  onActivate() { 
    window.scrollTo(0, 0); 
  }

  ngAfterViewInit() {

  }


}
