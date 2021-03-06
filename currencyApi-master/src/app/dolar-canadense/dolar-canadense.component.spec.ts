import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarCanadenseComponent } from './dolar-canadense.component';

describe('DolarCanadenseComponent', () => {
  let component: DolarCanadenseComponent;
  let fixture: ComponentFixture<DolarCanadenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolarCanadenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarCanadenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
