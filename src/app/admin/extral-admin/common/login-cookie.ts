import { CookieService } from 'ngx-cookie-service';
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginCookie {

    user = new User();

    constructor(
        private cookieService: CookieService,
        private router: Router,
        private toastrService: ToastrService
    ) { }

    /**
     * save info user when login 
     * @param data 
     */
    public saveInfoUserWhenLogin(data: any) {
        this.user = data[0];
        // save data to cookie
        this.cookieService.set('idUser', this.user.idUser);
        this.cookieService.set('username', this.user.username);
        this.cookieService.set('password', this.user.password);
        this.cookieService.set('typeUser', this.user.typeUser);
        this.cookieService.set('idTruong', this.user.idTruong);
        this.cookieService.set('idHS', this.user.idHS);
        this.cookieService.set('hoTen', this.user.hoTen);
        this.cookieService.set('gioiTinh', this.user.gioiTinh);
        this.cookieService.set('namSinh', this.user.namSinh);
        this.cookieService.set('sdt', this.user.sdt);
        this.cookieService.set('diaChi', this.user.diaChi);
        this.cookieService.set('email', this.user.email);

        // 1 is login 0 is logout
        this.cookieService.set('isLogin', '1');
    }

    /**
     * clear info user when logout 
     * @param data 
     */
    public clearInfoUserWhenLogout() {
        this.cookieService.deleteAll();

        // 1 is login 0 is logout
        this.cookieService.set('isLogin', '0');
    }

    /**
     * get info of user
     * @param data 
     */
    public getInfoUser(): User {
        //user login 
        if (this.cookieService.get('isLogin') === '1') {
            this.user.idUser = this.cookieService.get('idUser');
            this.user.username = this.cookieService.get('username');
            this.user.password = this.cookieService.get('password');
            this.user.typeUser = this.cookieService.get('typeUser');
            this.user.idTruong = this.cookieService.get('idTruong');
            this.user.idHS = this.cookieService.get('idHS');
            this.user.hoTen = this.cookieService.get('hoTen');
            this.user.gioiTinh = this.cookieService.get('gioiTinh');
            this.user.namSinh = this.cookieService.get('namSinh');
            this.user.sdt = this.cookieService.get('sdt');
            this.user.diaChi = this.cookieService.get('diaChi');
            this.user.email = this.cookieService.get('email');

            this.user.isLogin = true;
        } else {
            this.user = new User();
            this.user.isLogin = false;
        }

        return this.user;
    }

    /**
     * check is admin home
     * @param data 
     */
    public checkIsAdminHome(): boolean {
        // check user is admin home
        if (!(this.user && this.user.isLogin && this.user.typeUser === '1')) {
            this.toastrService.error('Không Có Quyền Truy Cập!');
            this.router.navigate(['/admin/login/login']); 
            return false;
        }
        return true;
    }

    /**
     * check is home admin school
     * @param data 
     */
    public checkIsHomeAdminSchool(): boolean {
        // check user is home admin school
        if (!(this.user && this.user.isLogin && this.user.typeUser === '2')) {
            this.toastrService.error('Không Có Quyền Truy Cập!');
            this.router.navigate(['/admin/login/login']);
            return false;
        }
        return true;
    }

    /**
     * check is giao vien
     * @param data 
     */
    public checkIsGiaoVien(): boolean {
        // check user is giao vien
        if (!(this.user && this.user.isLogin && this.user.typeUser === '3')) {
            this.toastrService.error('Không Có Quyền Truy Cập!');
            this.router.navigate(['/admin/login/login']);
            return false;
        }
        return true;
    }


}