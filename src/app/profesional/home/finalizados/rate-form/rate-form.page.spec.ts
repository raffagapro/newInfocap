import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateFormPage } from './rate-form.page';

describe('RateFormPage', () => {
  let component: RateFormPage;
  let fixture: ComponentFixture<RateFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
