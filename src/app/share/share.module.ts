import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {DeviceDetailComponent} from "../feature/details/device-detail/device-detail.component";
import {RouterModule} from "@angular/router";




@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [
    DeviceDetailComponent,  //设备详情
  ],
  providers: [],
})
export class ShareModule {
}
