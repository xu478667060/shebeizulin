import {NgModule} from '@angular/core';

import {StatisticsComponent} from './statistics.component';
import {ShareModule} from "../../share/share.module";
import {StatisticsRoutingModule} from "./statistics.router";

@NgModule({
  imports: [
    ShareModule,
    StatisticsRoutingModule
  ],
  exports: [],
  declarations: [StatisticsComponent],
  providers: [],
})
export class StatisticsModule {
}
