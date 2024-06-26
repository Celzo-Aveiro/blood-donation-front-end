import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadoresTipoSanguineoComponent } from './doadores-tipo-sanguineo.component';

describe('DoadoresTipoSanguineoComponent', () => {
  let component: DoadoresTipoSanguineoComponent;
  let fixture: ComponentFixture<DoadoresTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoadoresTipoSanguineoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoadoresTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
