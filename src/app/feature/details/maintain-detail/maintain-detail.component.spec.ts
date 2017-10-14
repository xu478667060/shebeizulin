import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainDetailComponent } from './maintain-detail.component';

describe('MaintainDetailComponent', () => {
  let component: MaintainDetailComponent;
  let fixture: ComponentFixture<MaintainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
