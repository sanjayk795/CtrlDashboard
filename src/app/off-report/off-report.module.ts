import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard, SharedModule } from '../shared';
import { OffReportComponent } from './off-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*import { PopoverModule } from 'ngx-bootstrap';
import { TabsModule, DatepickerModule } from 'ng2-bootstrap';*/

const offReportRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'off-report',
    component: OffReportComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    offReportRouting,
    SharedModule,
    NgbModule
  ],
  declarations: [OffReportComponent]
})
export class OffReportModule { }
