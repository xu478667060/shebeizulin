import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MerchantComponent} from "./merchant.component";
import {ApplyForMerchantComponent} from "../details/apply-for-merchant/apply-for-merchant.component";



const routes: Routes = [
  {path: '', component: MerchantComponent},
  //商家申请
  {path:'apply-for-merchant/:id' , component: ApplyForMerchantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantRoutingModule {
}

