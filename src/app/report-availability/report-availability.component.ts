import { Component } from '@angular/core';
import {Router} from "@angular/router";
import * as moment from 'moment';
import { environment } from '../../environments/environment'
import {ReportService} from '../shared/services/report.service';

const now = new Date();

@Component({
  selector: 'app-report-availability',
  templateUrl: './report-availability.component.html',
  styleUrls: ['./report-availability.component.css']
})
export class ReportAvailabilityComponent {
    routeUrl: string;
    model: any;
    selectedDate;
    slaData;
    public _uridate;
    public alerts = [];
    public alert = [];
    public data: Array<any> = [];
    public temp;
    jobid: number;
    reportid: number;
    public edited = false;

    public constructor(private reportservice: ReportService, private router: Router) {

        this._uridate = this.getSelectedDate();
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        this.onGet()
        this.onSlaCompliance();
        this.routeUrl = this.router.url;
    }

    public ngOnInit(): void {
        this.onPlannedOut();
    }

    public getSelectedDate() {
        this.selectedDate = moment(this.model).format().substring(0, 10);
        console.log('this is from selected date' + this.selectedDate);
        return this.selectedDate;
    }

    onSetAlerts() {
        for (let x of this.alerts) {
            this.alert.push(x);
            console.log(this.alert);
        }
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    update(event: any) {
        this._uridate = event.year + '-' + event.month + '-' + event.day;
        this.onGet()
        this.onSlaCompliance()
        this.onPlannedOut()
        this.getSelectedDate()
    }

    public getPlacement(): string {
        return window.innerHeight <= 300 ? 'top' : 'right';
    }

    public onGet(): any {
        this.reportservice.getReport(environment[this.router.url], this._uridate).subscribe(
            (data) => {
                this.temp = Object.keys(data).map((key) => {
                    return data[key];
                });
                this.data = this.temp[2];
            });
    }

    public onSlaCompliance() {
        /*this.reportservice.getSlaCompliance(this._uridate).subscribe(
          (data) => {
            this.slaData = data;
            console.log(this.slaData);
          }
        );*/
    }

    public onPlannedOut() {
        /*this.reportservice.getPlannedOut(this._uridate).subscribe(
          (data) => {
            this.alerts = data;
            console.log(this.alerts);
          }
        );*/
    }

   /* onShow(event, id, reportid){
        //show box msg
        this.reportid = reportid;
        this.jobid = id;
        this.edited = true;
        //wait 3 Seconds and hide
        setTimeout(function() {
            this.edited = false;
            console.log(this.edited);
        }.bind(this), 30000);
    }*/

    onHide(){
        this.edited = false;
    }

    setReportCall(path) {
        console.log("------------------", path);
    }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
}
