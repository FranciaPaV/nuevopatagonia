import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioreservaComponent } from './formularioreserva.component';

describe('FormularioreservaComponent', () => {
  let component: FormularioreservaComponent;
  let fixture: ComponentFixture<FormularioreservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioreservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
