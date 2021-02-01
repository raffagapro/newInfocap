import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicioPagarFormaPage } from './servicio-pagar-forma.page';

describe('ServicioPagarFormaPage', () => {
  let component: ServicioPagarFormaPage;
  let fixture: ComponentFixture<ServicioPagarFormaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPagarFormaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioPagarFormaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
