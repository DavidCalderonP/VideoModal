import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonalizadoComponent } from './modal-personalizado.component';

describe('ModalPersonalizadoComponent', () => {
  let component: ModalPersonalizadoComponent;
  let fixture: ComponentFixture<ModalPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPersonalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
