import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];
const routeChild: Routes = [
  {path:'',loadChildren:'app/feature/index/index.module#IndexModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routeChild)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
