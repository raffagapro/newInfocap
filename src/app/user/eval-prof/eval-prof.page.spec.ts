import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvalProfPage } from './eval-prof.page';

describe('EvalProfPage', () => {
  let component: EvalProfPage;
  let fixture: ComponentFixture<EvalProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalProfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvalProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
