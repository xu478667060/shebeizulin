import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaintainerComponent} from "./maintainer.component";



const routes: Routes = [
  {path: '', component: MaintainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintainerRoutingModule {
}

