import {NgModule} from '@angular/core';

import {HistoryComponent} from './history.component';
import {ShareModule} from "../../share/share.module";
import {HistoryRoutingModule} from "./history.router";

@NgModule({
  imports: [
    ShareModule,
    HistoryRoutingModule
  ],
  exports: [],
  declarations: [HistoryComponent],
  providers: [],
})
export class HistoryModule {
}
