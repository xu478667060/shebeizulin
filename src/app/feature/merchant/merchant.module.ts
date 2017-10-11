import {NgModule} from '@angular/core';

import {MerchantComponent} from './merchant.component';
import {ShareModule} from "../../share/share.module";
import {MerchantRoutingModule} from "./merchant.router";

@NgModule({
  imports: [
    ShareModule,
    MerchantRoutingModule
  ],
  exports: [],
  declarations: [MerchantComponent],
  providers: [],
})
export class MerchantModule {
}
