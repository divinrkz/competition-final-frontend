import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/management/employees/employees.component';
import { ProductsComponent } from './pages/management/products/products.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/management/employees',
    component: EmployeesComponent,
  },
  {
    path: 'shared/management/products',
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
