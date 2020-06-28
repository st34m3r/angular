import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AdminLayoutRoutes} from "./admin-layout.routing";
import {DashboardComponent} from "../../pages/dashboard/dashboard.component";
import {IconsComponent} from "../../pages/icons/icons.component";
import {MapComponent} from "../../pages/map/map.component";
import {NotificationsComponent} from "../../pages/notifications/notifications.component";
import {TablesComponent} from "../../pages/tables/tables.component";
import {TypographyComponent} from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { NewproductComponent } from 'src/app/pages/products/newproduct/newproduct.component';
import { HotelModule } from 'src/app/pages/hotel/hotel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    HotelModule
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    ProductsComponent,
    NewproductComponent,
    
    // RtlComponent
  ]
})
export class AdminLayoutModule {
}
