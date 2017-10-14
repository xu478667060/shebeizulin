import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForMaintainerComponent } from './apply-for-maintainer.component';

describe('ApplyForMaintainerComponent', () => {
  let component: ApplyForMaintainerComponent;
  let fixture: ComponentFixture<ApplyForMaintainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForMaintainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
