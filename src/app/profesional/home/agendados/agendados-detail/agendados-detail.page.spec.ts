import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendadosDetailPage } from './agendados-detail.page';

describe('AgendadosDetailPage', () => {
  let component: AgendadosDetailPage;
  let fixture: ComponentFixture<AgendadosDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendadosDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendadosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
