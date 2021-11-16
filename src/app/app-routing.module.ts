import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [

//   {
//     path: 'traffic-controller/advert/invoice',
//     canActivate: [TrafficControllerGuard, AuthGuard],
//     component: AdvertInvoiceComponent,
//   },

//   {
//     path: 'reset-password',
//     component: ResetPasswordComponent,
//   },
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
