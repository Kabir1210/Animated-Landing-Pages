import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTrailReportComponent } from './audit-trail-report.component';

describe('AuditTrailReportComponent', () => {
  let component: AuditTrailReportComponent;
  let fixture: ComponentFixture<AuditTrailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditTrailReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditTrailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
