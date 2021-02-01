import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitaDetailPage } from './visita-detail.page';

describe('VisitaDetailPage', () => {
  let component: VisitaDetailPage;
  let fixture: ComponentFixture<VisitaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
