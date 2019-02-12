import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class PianoService {

    // getAllWhatUrl = "http://localhost:8081/new/project/app_piano_new/api/selectAllByWhat.php";
    // getAllWhatUrl = "http://localhost/app_piano/api/selectAllByWhat.php";
    // getAllWhatUrl = "https://phonglegithubio.000webhostapp.com/api/selectAllByWhat.php";
    getAllWhatUrl = "http://salempiano.vn/api/selectAllByWhat.php";

    // destroy subcribe
    public subscription: Subscription[] = [];

    constructor(
        private http: Http,
        private toastrService: ToastrService,
    ) { }

    excuteAllByWhat(param: any, what: string): Observable<any[]> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        param.what = what;
        // console.log('Param input',param);
        return this.http.post(this.getAllWhatUrl, param, options).map((response: Response) => response.json());
    }
    /**
     * 
     * Gởi email
     * @param param 
     */
    sentMail(param: any): Observable<any[]> {
        return this.http.get(param).map((response: Response) => response.json());
    }

    /**
     * Show error
     * @param msg 
     */
    showError(msg: string) {
        this.toastrService.error(msg);
    }

    /**
     * Show error
     * @param msg 
     */
    showSuccess(msg: string) {
        this.toastrService.success(msg);
    }

    /**
     * destroySubcribe
     */
    destroySubcribe() {
        // loop and destroy subcribe
        this.subscription.forEach(element => {
            if (element !== undefined) {
                element.unsubscribe();
            }
        });
        this.subscription = [];
    }
}
