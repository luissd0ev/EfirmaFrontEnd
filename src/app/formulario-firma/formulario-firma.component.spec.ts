import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFirmaComponent } from './formulario-firma.component';

describe('FormularioFirmaComponent', () => {
  let component: FormularioFirmaComponent;
  let fixture: ComponentFixture<FormularioFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioFirmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
