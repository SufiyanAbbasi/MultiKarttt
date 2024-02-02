import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './subpages/orders/orders.component';
import { TransactionsComponent } from './subpages/transactions/transactions.component';
import { CouponslistComponent } from './subpages/couponslist/couponslist.component';
import { CouponscreateComponent } from './subpages/couponscreate/couponscreate.component';
import { PageslistComponent } from './subpages/pageslist/pageslist.component';
import { CreatepageComponent } from './subpages/createpage/createpage.component';
import { MediaComponent } from './subpages/media/media.component';
import { MenulistComponent } from './subpages/menulist/menulist.component';
import { CreatemenuComponent } from './subpages/createmenu/createmenu.component';
import { UserlistComponent } from './subpages/userlist/userlist.component';
import { CreateuserComponent } from './subpages/createuser/createuser.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'Order/sales', component: OrdersComponent },
    { path: 'Transactions/sales', component: TransactionsComponent },
    { path: 'List Coupons/coupons', component: CouponslistComponent },
    { path: 'Create Coupons/coupons', component: CouponscreateComponent },
    { path: 'List Pages/pages', component:PageslistComponent },
    { path: 'Create Pages/pages', component: CreatepageComponent},
    { path: 'media', component: MediaComponent},
    { path: 'Menu List/menu', component: MenulistComponent},
    { path: 'Create Menu/menu', component: CreatemenuComponent},
    { path: 'User List/user', component: UserlistComponent},
    { path: 'Create User/user', component: CreateuserComponent},
    
];