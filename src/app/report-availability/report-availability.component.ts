import { Component, OnInit, OnChanges } from '@angular/core';
import {Router, Route} from "@angular/router";

@Component({
  selector: 'app-report-availability',
  templateUrl: './report-availability.component.html',
  styleUrls: ['./report-availability.component.css']
})
export class ReportAvailabilityComponent {
    routeUrl:any;
    val:string;
  constructor(private route: Router) {
    this.routeUrl = this.route.url;
    if(this.route.url == '/report-availability') {
        this.route.navigate(['/report-availability/off-price']);
    }
  }
}
