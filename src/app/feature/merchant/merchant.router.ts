import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MerchantComponent} from "./merchant.component";
import {BusinessInformationComponent} from "../mc-second-page/business-information/business-information.component"

const routes: Routes = [
  {path: '', component: MerchantComponent},
  {path:'business-information', component: BusinessInformationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {
}
