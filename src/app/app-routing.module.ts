import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/management/employees/employees.component';
import { ProductsComponent } from './pages/management/products/products.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/management/employees',
    canActivate: [AuthGuard],
    component: EmployeesComponent,
  },
  {
    path: 'shared/management/products',
    canActivate: [AuthGuard],
    component: ProductsComponent,
  }
//   {
//     path: '**',
//     pathMatch: 'full',
//     component: PageNotFoundComponent,
//   },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
