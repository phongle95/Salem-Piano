import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SendService {
    data$: Observable<any>;
    private sendData = new Subject<any>();

    dataHeaderNhapDiem$: Observable<any>;
    private sendDataHeaderNhapDiem = new Subject<any>();

    dataHeaderStatusCot$: Observable<any>;
    private sendDataHeaderStatusCot = new Subject<any>();

    dataStatusDiem$: Observable<any>;
    private sendDataStatusDiem = new Subject<any>();

    dataHeaderNgayNghi$: Observable<any>;
    private sendDataHeaderNgayNghi = new Subject<any>();

    // quan ly hoc sinh
    dataHeaderHocSinhLeft$: Observable<any>;
    private sendDataHeaderHocSinhLeft = new Subject<any>();

    dataHeaderHocSinhRight$: Observable<any>;
    private sendDataHeaderHocSinhRight = new Subject<any>();

    dataHocSinhLeft$: Observable<any>;
    private sendDataHocSinhLeft = new Subject<any>();

    dataHocSinhRight$: Observable<any>;
    private sendDataHocSinhRight = new Subject<any>();

    constructor() {
        this.data$ = this.sendData.asObservable();
        this.dataHeaderNhapDiem$ = this.sendDataHeaderNhapDiem.asObservable();
        this.dataHeaderStatusCot$ = this.sendDataHeaderStatusCot.asObservable();
        this.dataStatusDiem$ = this.sendDataStatusDiem.asObservable();
        this.dataHeaderNgayNghi$ = this.sendDataHeaderNgayNghi.asObservable();

        //quan ly hoc sinh
        this.dataHeaderHocSinhLeft$ = this.sendDataHeaderHocSinhLeft.asObservable();
        this.dataHeaderHocSinhRight$ = this.sendDataHeaderHocSinhRight.asObservable();
        this.dataHocSinhLeft$ = this.sendDataHocSinhLeft.asObservable();
        this.dataHocSinhRight$ = this.sendDataHocSinhRight.asObservable();
    }


    /**
     * Quan lý hoc sinh left
     * @param data 
     */
    setDataHeaderHocSinhLeft(data) {
        this.sendDataHeaderHocSinhLeft.next(data);
    }

    setDataHeaderHocSinhRight(data) {
        this.sendDataHeaderHocSinhRight.next(data);
    }

    setDataHocSinhLeft(data) {
        this.sendDataHocSinhLeft.next(data);
    }

    setDataHocSinhRight(data) {
        this.sendDataHocSinhRight.next(data);
    } 

    /**
     * Quản lý status điểm
     * @param data 
     */
    setDataStatusDiem(data) {
        this.sendDataStatusDiem.next(data);
    }

    setDataHeaderNhapDiem(data) {
        this.sendDataHeaderNhapDiem.next(data);
    }


    setDataSend(data) {
        this.sendData.next(data);
    }

    setDataHeaderStatusCot(data) {
        this.sendDataHeaderStatusCot.next(data);
    }

    setDataHeaderNgayNghi(data) {
        this.sendDataHeaderNgayNghi.next(data);
    }
}