import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { LogoutModule } from './logout/logout.module';
import { OffReportModule } from './off-report/off-report.module'
import { SalesReportModule } from './sales-report/sales-report.module';
import { FullpriceReportModule } from './fullprice-report/fullprice-report.module';
import { AllReportModule } from './all-report/all-report.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { TabsModule, DatepickerModule } from 'ng2-bootstrap';
import { DataTableModule } from 'angular2-datatable';*/


import {
  ApiService,
  AuthGuard,
  CommentsService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  SharedModule,
  TagsService,
  UserService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [ ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    rootRouting,
    SharedModule,
    NgbModule.forRoot(),
    SettingsModule,
    LogoutModule,
    OffReportModule,
    SalesReportModule,
    FullpriceReportModule,
    AllReportModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    CommentsService,
    JwtService,
    TagsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
