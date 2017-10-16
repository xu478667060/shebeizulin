import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index.component";
import {DeviceDetailComponent} from "../details/device-detail/device-detail.component";
import {TerraceComponent} from "../terrace/terrace.component";

// import {BusinessInformationComponent} from "../mc-second-page/business-information/business-information.component"

const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
     {path:'' ,redirectTo:'terminal' ,pathMatch:'full'},
    //平台信息
      {path:'terrace/:id' ,component:TerraceComponent},
    /**设备管理**/
    {path: 'terminal', loadChildren: 'app/feature/terminal-list/terminal-list.module#TerminalListModule'},
    {path: 'version', loadChildren: 'app/feature/version-list/version-list.module#VersionListModule'},
    {path: 'device', loadChildren: 'app/feature/device-list/device-list.module#DeviceListModule'},


    {path: 'gps', loadChildren: 'app/feature/gps-list/gps-list.module#GpsListModule'},
    /**订单管理**/
    {path: 'monitoring', loadChildren: 'app/feature/monitoring/monitoring.module#MonitoringModule'},
    {path: 'trade', loadChildren: 'app/feature/trade/trade.module#TradeModule'},
    {path: 'lease', loadChildren: 'app/feature/lease/lease.module#LeaseModule'},
    {path: 'weibao', loadChildren: 'app/feature/maintain/maintain.module#MaintainModule'},
    /**成员管理**/
    {path: 'merchant', loadChildren: 'app/feature/merchant/merchant.module#MerchantModule'},
      // 商家信息

    {path: 'user', loadChildren: 'app/feature/user/user.module#UserModule'},

      {path: 'maintainer', loadChildren: 'app/feature/maintainer/maintainer.module#MaintainerModule'},

    {path: 'maintainer', loadChildren: 'app/feature/maintainer/maintainer.module#MaintainerModule'},

    /**数据报警**/
    {path: 'map', loadChildren: 'app/feature/map/map.module#MapModule'},
    {path: 'realtime', loadChildren: 'app/feature/realtime/realtime.module#RealtimeModule'},
    {path: 'history', loadChildren: 'app/feature/history/history.module#HistoryModule'},
    /**运营管理**/
    {path: 'statistics', loadChildren: 'app/feature/statistics/statistics.module#StatisticsModule'},
    {path: 'fapiao', loadChildren: 'app/feature/fapiao/fapiao.module#FapiaoModule'},
    {path: 'tuihuo', loadChildren: 'app/feature/tuihuo/tuihuo.module#TuihuoModule'},
    {path: 'expense', loadChildren: 'app/feature/expense/expense.module#ExpenseModule'},


  ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {
}
