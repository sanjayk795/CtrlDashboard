import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard, SharedModule } from '../shared';
import {FullpriceReportComponent} from './fullprice-report.component';

const fullReportRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'full-report',
    component: FullpriceReportComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    fullReportRouting
  ],
  declarations: [FullpriceReportComponent]
})
export class FullpriceReportModule { }
