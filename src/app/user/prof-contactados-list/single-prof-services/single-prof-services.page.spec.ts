import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleProfServicesPage } from './single-prof-services.page';

describe('SingleProfServicesPage', () => {
  let component: SingleProfServicesPage;
  let fixture: ComponentFixture<SingleProfServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProfServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleProfServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
