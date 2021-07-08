import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceReportPage } from './service-report.page';

describe('ServiceReportPage', () => {
  let component: ServiceReportPage;
  let fixture: ComponentFixture<ServiceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
