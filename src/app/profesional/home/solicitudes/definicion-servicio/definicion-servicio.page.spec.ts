import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefinicionServicioPage } from './definicion-servicio.page';

describe('DefinicionServicioPage', () => {
  let component: DefinicionServicioPage;
  let fixture: ComponentFixture<DefinicionServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicionServicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefinicionServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
