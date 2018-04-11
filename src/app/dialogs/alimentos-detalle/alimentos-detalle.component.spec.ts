import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosDetalleComponent } from './alimentos-detalle.component';

describe('AlimentosDetalleComponent', () => {
  let component: AlimentosDetalleComponent;
  let fixture: ComponentFixture<AlimentosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
