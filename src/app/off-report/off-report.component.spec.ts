import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffReportComponent } from './off-report.component';

describe('OffReportComponent', () => {
  let component: OffReportComponent;
  let fixture: ComponentFixture<OffReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
