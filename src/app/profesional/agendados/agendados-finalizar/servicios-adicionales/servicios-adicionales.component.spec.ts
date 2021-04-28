import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiciosAdicionalesComponent } from './servicios-adicionales.component';

describe('ServiciosAdicionalesComponent', () => {
  let component: ServiciosAdicionalesComponent;
  let fixture: ComponentFixture<ServiciosAdicionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAdicionalesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiciosAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
