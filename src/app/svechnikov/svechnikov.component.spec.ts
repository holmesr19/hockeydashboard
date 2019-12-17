import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvechnikovComponent } from './svechnikov.component';

describe('SvechnikovComponent', () => {
  let component: SvechnikovComponent;
  let fixture: ComponentFixture<SvechnikovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvechnikovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvechnikovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
