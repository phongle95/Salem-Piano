
import { AdminService } from './../../../admin/extral-admin/api/admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../extral-admin/model/user';
import { LoginCookie } from '../../extral-admin/common/login-cookie';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user = new User();
  isDisabled: boolean;

  constructor(
    private router: Router,
    private adminservice: AdminService,
    private toastrService: ToastrService,
    private loginCookie: LoginCookie
  ) { }

  ngOnInit() {
    // có các loại user sau
    // 1 admin
    // 2 admin trường học
    // 3 giáo vien
    // 4 phụ huynh
    // 5 học sinh

  }


  /**
  * On click button login
  */
  onBtnLoginClick() {
    this.router.navigate(['/admin/dashboards/list-news']);
    return;
    const param: any = { username: this.user.username, password: this.user.password }
    this.adminservice.excuteAllByWhat(param, '140')
      .subscribe(data => {
        if (data !== null && data !== undefined) {
          this.toastrService.success('Đăng nhập thành công');

          // save info user when login succes
          this.loginCookie.saveInfoUserWhenLogin(data);

          // check type user and router
          const typeUser = data[0].typeUser;

          // 1 admin
          if (typeUser === '1') {
            this.router.navigate(['/admin/home-admin']);
          }

          // 2 admin trường học
          if (typeUser === '2') {
            this.router.navigate(['/admin/home-admin-school']);
          }

          // 3 giáo vien
          if (typeUser === '3') {
            this.router.navigate(['/user/home-user']);
          }

          // 4 phụ huynh
          // 5 học sinh



        } else {
          this.toastrService.error('Tên đăng nhập hoặc Mật khẩu không đúng');
          this.isDisabled = true;

          setTimeout(() => {
            this.isDisabled = false;
          }, 5000);
        }
      })
  }

}

// else {
//   this.toastrService.success('Đăng nhập thành công')
//   this.router.navigate(['/admin/home-admin']);
// }