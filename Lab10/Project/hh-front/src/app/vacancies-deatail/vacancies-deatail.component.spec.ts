import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesDeatailComponent } from './vacancies-deatail.component';

describe('VacanciesDeatailComponent', () => {
  let component: VacanciesDeatailComponent;
  let fixture: ComponentFixture<VacanciesDeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesDeatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
