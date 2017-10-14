import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForMerchantComponent } from './apply-for-merchant.component';

describe('ApplyForMerchantComponent', () => {
  let component: ApplyForMerchantComponent;
  let fixture: ComponentFixture<ApplyForMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
