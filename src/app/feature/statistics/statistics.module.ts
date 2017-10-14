import {NgModule} from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import {StatisticsComponent} from './statistics.component';
import {ShareModule} from "../../share/share.module";
import {StatisticsRoutingModule} from "./statistics.router";

// import { EChartOptionDirective1 } from '../../directive/echart/echart-option.directive';

@NgModule({
  imports: [
    ShareModule,
    StatisticsRoutingModule,
    NgZorroAntdModule
  ],
  exports: [],
  declarations: [StatisticsComponent],
  providers: [],
})
export class StatisticsModule {
}
