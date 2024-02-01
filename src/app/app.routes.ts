import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './subpages/orders/orders.component';
import { TransactionsComponent } from './subpages/transactions/transactions.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'Order/sales', component: OrdersComponent },
    { path: 'Transactions/sales', component: TransactionsComponent },


];