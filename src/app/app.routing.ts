import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
// import { DataResolver } from './app.resolver';
import dlRoutes from './dl-my-account/dl-my-account.routes';

const appRoutes: Routes = [
  { path: '',      component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: 'login', component: LoginComponent },
  ...dlRoutes,
  { path: '**',    component: NoContentComponent },
];

export const routing = RouterModule.forRoot(appRoutes,
    { useHash: true, preloadingStrategy: PreloadAllModules });
