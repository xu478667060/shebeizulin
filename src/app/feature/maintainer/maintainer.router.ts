import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaintainerComponent} from "./maintainer.component";
import {ApplyForMaintainerComponent} from "../details/apply-for-maintainer/apply-for-maintainer.component";
import {MaintainDetailComponent} from "../details/maintain-detail/maintain-detail.component";



const routes: Routes = [
  {path: '', component: MaintainerComponent},
  //维修员信息
  {path:'maintain-detail/:id' , component: MaintainDetailComponent},
  //维修员申请
  {path:'apply-for-maintainer/:id' , component: ApplyForMaintainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintainerRoutingModule {
}

