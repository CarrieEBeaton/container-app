import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/components/welcome.component';
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login.component';
import { AccountLibModule } from 'account-lib';
import { BookingLibModule } from 'booking-lib';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'bookings',
        // canActivate: [AuthGuard],
        loadChildren: () => BookingLibModule
      },
      {
        path: 'accounts',
        // canActivate: [AuthGuard],
        loadChildren:  () => AccountLibModule
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
