import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExluirPensamentoComponent } from './exluir-pensamento.component';

describe('ExluirPensamentoComponent', () => {
  let component: ExluirPensamentoComponent;
  let fixture: ComponentFixture<ExluirPensamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExluirPensamentoComponent]
    });
    fixture = TestBed.createComponent(ExluirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
