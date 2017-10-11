import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GpsListComponent} from "./gps-list.component";



const routes: Routes = [
  {path: '', component: GpsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsListRoutingModule {
}

