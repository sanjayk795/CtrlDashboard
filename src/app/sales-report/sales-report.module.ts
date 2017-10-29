import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard, SharedModule } from '../shared';
import { SalesReportComponent } from './sales-report.component';

const salesReportRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'sales-report',
    component: SalesReportComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    salesReportRouting
  ],
  declarations: [SalesReportComponent]
})
export class SalesReportModule { }
