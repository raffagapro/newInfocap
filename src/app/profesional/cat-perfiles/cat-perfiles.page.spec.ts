import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatPerfilesPage } from './cat-perfiles.page';

describe('CatPerfilesPage', () => {
  let component: CatPerfilesPage;
  let fixture: ComponentFixture<CatPerfilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatPerfilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatPerfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
