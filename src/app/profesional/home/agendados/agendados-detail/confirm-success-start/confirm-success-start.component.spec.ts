import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmSuccessStartComponent } from './confirm-success-start.component';

describe('ConfirmSuccessStartComponent', () => {
  let component: ConfirmSuccessStartComponent;
  let fixture: ComponentFixture<ConfirmSuccessStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSuccessStartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmSuccessStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
