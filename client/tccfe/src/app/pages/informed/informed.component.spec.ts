import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformedComponent } from './informed.component';

describe('InformedComponent', () => {
  let component: InformedComponent;
  let fixture: ComponentFixture<InformedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
