import {NgModule} from '@angular/core';

import {MonitoringComponent} from './monitoring.component';
import {ShareModule} from "../../share/share.module";
import {MonitoringRoutingModule} from "./monitoring.router";

@NgModule({
  imports: [
    ShareModule,
    MonitoringRoutingModule
  ],
  exports: [],
  declarations: [MonitoringComponent],
  providers: [],
})
export class MonitoringModule {
}
