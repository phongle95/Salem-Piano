import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SearchService {
    data$: Observable<any>;
    private sendData = new Subject<any>();

    dataTripDriver$: Observable<any>;
    private sendDataTripDriver = new Subject<any>();

    constructor() {
        this.data$ = this.sendData.asObservable();
        this.dataTripDriver$ = this.sendDataTripDriver.asObservable();
    }

    setDataSearch(data) {
        console.log('setdataSearch', data);
        this.sendData.next(data);
    }

    setDataTripDriver(data) {
        console.log('setDataTripDriver', data);
        this.sendDataTripDriver.next(data);
    }
}