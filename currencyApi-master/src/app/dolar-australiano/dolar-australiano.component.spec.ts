import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarAustralianoComponent } from './dolar-australiano.component';

describe('DolarAustralianoComponent', () => {
  let component: DolarAustralianoComponent;
  let fixture: ComponentFixture<DolarAustralianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolarAustralianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarAustralianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
