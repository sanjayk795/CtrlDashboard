import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selfservice-report',
  templateUrl: './selfservice-report.component.html',
  styleUrls: ['./selfservice-report.component.css']
})
export class SelfserviceReportComponent implements OnInit {
  data: any;
  options: any;
  constructor() {

      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {

                  label: 'First Dataset',
                  data: [23,23,4,24,55,6,66,77],
                  backgroundColor: [
                      "#6d6c6c"
                  ]
              },
              {
                  label: 'Second Dataset',
                  data: [23, 34, 45, 65]
              }
          ]
      };

      this.options = {
          title: {
              display: true,
              text: 'SLA Missed',
              fontSize: 16
          },
          legend: {
              position: 'bottom'
          }
      };
  }

  ngOnInit() {
  }

}
