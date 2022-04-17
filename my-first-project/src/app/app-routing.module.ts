import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { NotFoundComponent } from './youtube/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent, 
    pathMatch: 'full',
    children: [
      { path: 'login', component: LoginComponent },
    ], 
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
