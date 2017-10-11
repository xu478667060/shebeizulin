import {NgModule} from '@angular/core';

import {TradeComponent} from './trade.component';
import {ShareModule} from "../../share/share.module";
import {TradeRoutingModule} from "./trade.router";

@NgModule({
  imports: [
    ShareModule,
    TradeRoutingModule
  ],
  exports: [],
  declarations: [TradeComponent],
  providers: [],
})
export class TradeModule {
}
