import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicioAgendadoModalComponent } from './servicio-agendado-modal.component';

describe('ServicioAgendadoModalComponent', () => {
  let component: ServicioAgendadoModalComponent;
  let fixture: ComponentFixture<ServicioAgendadoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAgendadoModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioAgendadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
