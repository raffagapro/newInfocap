import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudEnviadaModalComponent } from './solicitud-enviada-modal.component';

describe('SolicitudEnviadaModalComponent', () => {
  let component: SolicitudEnviadaModalComponent;
  let fixture: ComponentFixture<SolicitudEnviadaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudEnviadaModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudEnviadaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
