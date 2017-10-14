import {NgModule} from '@angular/core';
import {IndexComponent} from './index.component';
import {ShareModule} from "../../share/share.module";
import {IndexRoutingModule} from "./index.router";
import {DeviceDetailComponent} from "../details/device-detail/device-detail.component";
import {MaintainDetailComponent} from "../details/maintain-detail/maintain-detail.component";
import {ApplyForMaintainerComponent} from "../details/apply-for-maintainer/apply-for-maintainer.component";
import {ApplyForMerchantComponent} from "../details/apply-for-merchant/apply-for-merchant.component";


@NgModule({
  imports: [
    ShareModule,
    IndexRoutingModule
  ],
  exports: [],
  declarations: [
    IndexComponent,
    DeviceDetailComponent,
    MaintainDetailComponent,
    ApplyForMaintainerComponent,
    ApplyForMerchantComponent
  ],
  providers: [],
})
export class IndexModule {
}
