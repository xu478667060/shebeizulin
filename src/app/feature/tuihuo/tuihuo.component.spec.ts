import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuihuoComponent } from './tuihuo.component';

describe('TuihuoComponent', () => {
  let component: TuihuoComponent;
  let fixture: ComponentFixture<TuihuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuihuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuihuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
