import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendadosPage } from './agendados.page';

describe('AgendadosPage', () => {
  let component: AgendadosPage;
  let fixture: ComponentFixture<AgendadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
