import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteComponent } from './ristorante.component';

describe('RistoranteComponent', () => {
  let component: RistoranteComponent;
  let fixture: ComponentFixture<RistoranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RistoranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
