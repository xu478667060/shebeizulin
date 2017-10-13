import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {DownSelectComponent} from "../component/down-select/down-select.component";
import {RouterModule} from "@angular/router";
import {DeviceDetailComponent} from "../feature/details/device-detail/device-detail.component";
import {SearchBoxComponent} from "../component/search-box/search-box.component";
import {TableListComponent} from "../component/table-list/table-list.component";
import {DivPageComponent} from "../component/div-page/div-page.component";


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
    NgZorroAntdModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    DownSelectComponent,
    SearchBoxComponent,
    TableListComponent,
    DivPageComponent
  ],
  declarations: [
    DownSelectComponent,
    SearchBoxComponent,
    TableListComponent,
    DivPageComponent
  ],
  providers: [],
})
export class ShareModule {
}
