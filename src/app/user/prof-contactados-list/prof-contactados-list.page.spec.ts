import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfContactadosListPage } from './prof-contactados-list.page';

describe('ProfContactadosListPage', () => {
  let component: ProfContactadosListPage;
  let fixture: ComponentFixture<ProfContactadosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfContactadosListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfContactadosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
