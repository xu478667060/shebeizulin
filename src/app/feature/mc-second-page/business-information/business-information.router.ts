import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusinessInformationComponent} from "./business-information.component";

const routes: Routes = [
  {path: '', component: BusinessInformationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessInformationRoutingModule {
}
