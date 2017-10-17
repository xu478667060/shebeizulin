import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeviceListComponent} from "./device-list.component";
import {DeviceDetailComponent} from "../details/device-detail/device-detail.component";
import {ListDeviceDetailComponent} from "../details/list-device-detail/list-device-detail.component";



const routes: Routes = [
  {path: '', component: DeviceListComponent},
  //设备详情页
  {path:'list-device-detail/:id' , component: ListDeviceDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceListRoutingModule {
}

