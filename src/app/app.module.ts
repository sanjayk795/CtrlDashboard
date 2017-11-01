import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {LogoutModule} from './logout/logout.module';
import {OffReportModule} from './off-report/off-report.module'
import {SalesReportModule} from './sales-report/sales-report.module';
import {FullpriceReportModule} from './fullprice-report/fullprice-report.module';
import {AllReportModule} from './all-report/all-report.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from 'angular2-datatable';

import {
    ApiService,
    AuthGuard,
    FooterComponent,
    HeaderComponent,
    JwtService,
    SharedModule,
    UserService,
    ReportService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [],
    imports: [
        BrowserModule,
        AuthModule,
        HomeModule,
        rootRouting,
        SharedModule,
        NgbModule.forRoot(),
        LogoutModule,
        OffReportModule,
        SalesReportModule,
        FullpriceReportModule,
        AllReportModule,
        DataTableModule
    ],
    providers: [
        ApiService,
        AuthGuard,
        JwtService,
        UserService,
        ReportService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
