import {NgModule} from '@angular/core';

import {MerchantComponent} from './merchant.component';
import {ShareModule} from "../../share/share.module";
import {MerchantRoutingModule} from "./merchant.router";
import {ApplyForMerchantComponent} from "../details/apply-for-merchant/apply-for-merchant.component";
import {UserManageService} from "../../service/user-manage.service";

@NgModule({
  imports: [
    ShareModule,
    MerchantRoutingModule
  ],
  exports: [],
  declarations: [MerchantComponent, ApplyForMerchantComponent],
  providers: [UserManageService],
})
export class MerchantModule {
}
