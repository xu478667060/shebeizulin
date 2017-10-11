import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FapiaoComponent } from './fapiao.component';

describe('FapiaoComponent', () => {
  let component: FapiaoComponent;
  let fixture: ComponentFixture<FapiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FapiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FapiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
