import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {DownSelectComponent} from "../component/down-select/down-select.component";
import {RouterModule} from "@angular/router";
import {SearchBoxComponent} from "../component/search-box/search-box.component";
import {TableListComponent} from "../component/table-list/table-list.component";
import {DivPageComponent} from "../component/div-page/div-page.component";
import {SwitchItemComponent} from "../component/switch-item/switch-item.component";
import {StepsComponent} from "../component/steps/steps.component";

import {ChartComponent} from "../component/chart/chart.component";
import {SureModalComponent} from "../component/sure-modal/sure-modal.component";
import {HttpClientModule} from "@angular/common/http";
import {EChartOptionDirective1} from "../directive/echart/echart-option.directive";
import {DeviceDetailComponent} from "../feature/details/device-detail/device-detail.component";
import {UiSwitchModule} from "ngx-ui-switch";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    UiSwitchModule,
    NgZorroAntdModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    DownSelectComponent,
    SearchBoxComponent,
    TableListComponent,
    DivPageComponent,
    SwitchItemComponent,
    SureModalComponent,
    DivPageComponent,
    StepsComponent,
    NgZorroAntdModule,
    ChartComponent,
    UiSwitchModule,
    EChartOptionDirective1
  ],
  declarations: [
    DownSelectComponent,
    SearchBoxComponent,
    TableListComponent,
    DivPageComponent,
    SwitchItemComponent,
    SureModalComponent,
    DivPageComponent,
    ChartComponent,
      StepsComponent,
    EChartOptionDirective1,
    DeviceDetailComponent,

  ],
  providers: [],
})
export class ShareModule {
}
