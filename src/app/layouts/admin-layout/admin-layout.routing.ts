import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapComponent} from '../../pages/map/map.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {UsersComponent} from '../../pages/users/users.component';
import {CompanyComponent} from '../../pages/company/company.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { NewproductComponent } from 'src/app/pages/products/newproduct/newproduct.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapComponent},
  {path: 'users', component: UsersComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path : 'products' , component: ProductsComponent},
  {path : 'products/newproduct', component: NewproductComponent}
  //{path : 'newproduct' , component: NewProductComponent}



  // { path: "rtl", component: RtlComponent }
];
