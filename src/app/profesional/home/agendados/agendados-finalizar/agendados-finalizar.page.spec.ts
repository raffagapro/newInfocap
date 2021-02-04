import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendadosFinalizarPage } from './agendados-finalizar.page';

describe('AgendadosFinalizarPage', () => {
  let component: AgendadosFinalizarPage;
  let fixture: ComponentFixture<AgendadosFinalizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendadosFinalizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendadosFinalizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
