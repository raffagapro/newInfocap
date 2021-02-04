import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitaTecnicaPage } from './visita-tecnica.page';

describe('VisitaTecnicaPage', () => {
  let component: VisitaTecnicaPage;
  let fixture: ComponentFixture<VisitaTecnicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaTecnicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitaTecnicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
