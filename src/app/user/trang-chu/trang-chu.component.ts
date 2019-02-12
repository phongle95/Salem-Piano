import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, NavigationStart } from '@angular/router'; 
import { LoginCookie } from 'src/app/admin/extral-admin/common/login-cookie';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private loginCookie: LoginCookie,
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }


}
