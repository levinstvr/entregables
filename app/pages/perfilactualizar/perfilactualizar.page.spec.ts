import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilactualizarPage } from './perfilactualizar.page';

describe('PerfilactualizarPage', () => {
  let component: PerfilactualizarPage;
  let fixture: ComponentFixture<PerfilactualizarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilactualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
