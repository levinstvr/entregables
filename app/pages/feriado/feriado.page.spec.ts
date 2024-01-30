import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeriadoPage } from './feriado.page';

describe('FeriadoPage', () => {
  let component: FeriadoPage;
  let fixture: ComponentFixture<FeriadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeriadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
