import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiciosAdicionalesPage } from './servicios-adicionales.page';

describe('ServiciosAdicionalesPage', () => {
  let component: ServiciosAdicionalesPage;
  let fixture: ComponentFixture<ServiciosAdicionalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAdicionalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosAdicionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
