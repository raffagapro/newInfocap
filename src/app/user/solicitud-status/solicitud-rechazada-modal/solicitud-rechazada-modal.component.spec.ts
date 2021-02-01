import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudRechazadaModalComponent } from './solicitud-rechazada-modal.component';

describe('SolicitudRechazadaModalComponent', () => {
  let component: SolicitudRechazadaModalComponent;
  let fixture: ComponentFixture<SolicitudRechazadaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudRechazadaModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudRechazadaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
