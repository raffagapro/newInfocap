import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrgenServicePage } from './urgen-service.page';

describe('UrgenServicePage', () => {
  let component: UrgenServicePage;
  let fixture: ComponentFixture<UrgenServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgenServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrgenServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
