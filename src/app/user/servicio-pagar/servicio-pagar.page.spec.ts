import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicioPagarPage } from './servicio-pagar.page';

describe('ServicioPagarPage', () => {
  let component: ServicioPagarPage;
  let fixture: ComponentFixture<ServicioPagarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioPagarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
