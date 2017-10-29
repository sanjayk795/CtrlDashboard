import {
  Component,
  OnInit,
  DoCheck,
  Output,
  EventEmitter,
} from '@angular/core';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';
import {ApiService} from '../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
const now = new Date();

@Component({
  selector: 'app-off-report',
  templateUrl: './off-report.component.html',
  styleUrls: ['./off-report.component.css']
})
export class OffReportComponent implements OnInit, DoCheck {
  testRequestId = 'uelHwf8o7_U';
  model: any;
  date: { year: number, month: number, day: number };
  selectedDate;
  @Output('changedate') changedDate = new EventEmitter<any>();

  uriselectedDate = new Subject();
  slaData;
  dateObservable;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "reportname";
  public sortOrder = "asc";
  public _uridate;
  public alerts = [];
  public alert = [];
  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'JobName', name: 'jobs', filtering: {filterString: '', placeholder: 'Filter by jobname'}},
    {
      title: 'ReportName',
      name: 'reportname',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by ReportName'}
    },
    {title: 'Source', className: ['source-header', 'text-success'], name: 'source', sort: 'asc'},
    {title: 'SLA', name: 'sla_achieved', sort: '', filtering: {filterString: '', placeholder: 'Filter by SLA'}},
    {title: 'Actual', className: 'text-warning', name: 'reportstatus'},
    {title: 'ETA (!)', name: 'reportendtime'}
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;
  public reportData;
  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  public reports = [];
  public data: Array<any> = [];
  changeLog = [];
  public temp;
  public rtemp;
  public jobs: Array<any>[] = [];


  public constructor(private dataservice: ApiService, private route: ActivatedRoute,
                     private http: Http, private router: Router) {

    this._uridate = this.getSelectedDate();
    this.onGet();
    this.onSlaCompliance();

  }

  public ngOnInit(): void {

    //  this.dateObservable = Observable.create((observer: Observer<any>) => {
    //     setInterval(() => {
    //       observer.next(this.selectedDate);
    //     },2000);

    //   });
    // console.log(this.changeLog);

    this.selectToday();
    //this.onSetAlerts();
    this.onPlannedOut();
    this.getSelectedDate();
    //this.changeDate();

  }

  public ngDoCheck() {}

  selectToday() {

    //this.date = Object.keys(this.model).map((key)=>{ return this.model[key]});
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    // this.selectedDate = "this.model.year + this.model.month + this.model.day" ;
    //  for(var key in this.model){
    //   if(this.model.hasOwnProperty(key)){
    //     console.log(key);
    //   }
    //  }

  }

  public getSelectedDate() {
    // var data2 = this.model ;
    // var currentDateSelected="";
    // data.forEach((d) => {
    //   d.timestamp = new Date(d.timestamp);
    // });
    // return data;

    // this.selectedDate =  Object.keys(data2).map((key)=>{ return data2[key]});
    // console.log(this.selectedDate);

    // this.selectedDate.forEach((el) =>{
    //   currentDateSelected.append(el);
    //   console.log(currentDateSelected);
    // });

    this.selectedDate = moment(this.model).format().substring(0, 10);
    console.log('this is from selected date' + this.selectedDate);
    //console.log(this.selectedDate);
    return this.selectedDate;
  }

  geturiDateSelected(): any {

    //   return this.uriselectedDate = Observable.create((observer) => {
    //     observer.next(this.selectedDate);
    //  });
    var date = moment(this.model).format().substring(0, 10);
    this.uriselectedDate.next(date);
    //return this.uriselectedDate.next(this.selectedDate);
    return this.uriselectedDate;
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
    this.onGet();
    this.onSlaCompliance();
    this.onPlannedOut();
    this.getSelectedDate();
  }

  public onGet(): any[] {
    this.dataservice.get('/reports/off-report.json').subscribe(
      (data) => {
        this.temp = Object.keys(data).map((key) => {
          return data[key];
        });
        this.rtemp = this.temp[2];
        this.reports = this.rtemp;
        this.data = this.reports;
        this.length = this.data.length;
        for (const report of this.data) {
          // report.reportendtime = new Date();
          this.rows.push(report);
        }

        this.rows.forEach((item: any) => {
          this.jobs.push(item.jobs);

        });


      });
    return this.data;

  }

  changeDate() {
    var date = moment(this.model).format().substring(0, 10);
    return this.changedDate.emit(date);
  }

  onchangeDate() {
    return this.changedDate;
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.source.length;
  }

  public getPlacement(): string {
    return window.innerHeight <= 300 ? 'top' : 'right';

  }

  public onSlaCompliance() {
    /*this.dataservice.getSlaCompliance(this._uridate).subscribe(
      (data) => {
        this.slaData = data;
        console.log(this.slaData);
      }
    );*/
  }

  public onPlannedOut() {
    /*this.dataservice.getPlannedOut(this._uridate).subscribe(
      (data) => {
        this.alerts = data;
        console.log(this.alerts);
      }
    );*/
  }

  onPage(): void {
    //window.location.href='http://www.cnn.com/';

    window.open("http://172.27.25.64:8080/api/admin/", "_blank");

  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
