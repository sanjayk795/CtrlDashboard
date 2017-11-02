import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-generic-report',
    templateUrl: './generic-report-component.html'
})
export class GenericReportComponent implements OnInit {

    constructor(private currentRoute: ActivatedRoute, private router:Router) {
        console.log('I am in GenericReportComponent', this.router.url);
    }

    ngOnInit() {
    }

}