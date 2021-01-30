import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudStatusPage } from './solicitud-status.page';

describe('SolicitudStatusPage', () => {
  let component: SolicitudStatusPage;
  let fixture: ComponentFixture<SolicitudStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
