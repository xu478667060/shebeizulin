import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeviceListComponent} from "./device-list.component";
import {DeviceDetailComponent} from "../details/device-detail/device-detail.component";



const routes: Routes = [
  {path: '', component: DeviceListComponent},
  //设备详情页
  {path:'device-detail/:id' , component: DeviceDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceListRoutingModule {
}

