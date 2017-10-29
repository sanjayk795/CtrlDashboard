import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpriceReportComponent } from './fullprice-report.component';

describe('FullpriceReportComponent', () => {
  let component: FullpriceReportComponent;
  let fixture: ComponentFixture<FullpriceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullpriceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullpriceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
