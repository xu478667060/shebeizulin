import {NgModule} from '@angular/core';

import {MerchantComponent} from './merchant.component';
import {ShareModule} from "../../share/share.module";
import {MerchantRoutingModule} from "./merchant.router";
import {BusinessInformationComponent} from "../mc-second-page/business-information/business-information.component"
import {ApplyForMerchantComponent} from "../details/apply-for-merchant/apply-for-merchant.component";

@NgModule({
  imports: [
    ShareModule,
    MerchantRoutingModule
  ],
  exports: [],
  declarations: [MerchantComponent, ApplyForMerchantComponent, BusinessInformationComponent],
  providers: [],
})
export class MerchantModule {
}
