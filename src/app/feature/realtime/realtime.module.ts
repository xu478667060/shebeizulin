import {NgModule} from '@angular/core';

import {RealtimeComponent} from './realtime.component';
import {ShareModule} from "../../share/share.module";
import {RealtimeRoutingModule} from "./realtime.router";

@NgModule({
  imports: [
    ShareModule,
    RealtimeRoutingModule
  ],
  exports: [],
  declarations: [RealtimeComponent],
  providers: [],
})
export class RealtimeModule {
}
