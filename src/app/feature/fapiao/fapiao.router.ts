import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FapiaoComponent} from "./fapiao.component";


const routes: Routes = [
  {path: '', component: FapiaoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FapiaoRoutingModule {
}

