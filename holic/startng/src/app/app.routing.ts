import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { AnonymousGuard } from './auth/anonymous.guard';
import { VideoResolver } from './pages/dashboard/service/video.resolver';
import { UserVideoResolver } from './pages/dashboard/service/uservideo.resolver';
import { VideoDetailResolver } from './pages/holicvideo/service/videodetail.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        resolve: {
          video: VideoResolver  // on associe un resolver à la route
        },
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'video/:id/:mainid',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/holicvideo/holicvideo.module').then(m => m.HolicvideoModule),
        data: { breadcrumb: 'VideoDetails' },
        resolve: {
          detail: VideoDetailResolver  // on associe un resolver à la route
        }
      },
      {
        path: 'video/:id/:mainid/:username',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/holicvideo/holicvideo.module').then(m => m.HolicvideoModule),
        data: { breadcrumb: 'VideoDetails' },
        resolve: {
          detail: VideoDetailResolver  // on associe un resolver à la route
        }
      },
      {
        path: 'user/:username',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
        resolve: {
          video: UserVideoResolver  // on associe un resolver à la route
        }
      },
      {
        path: 'search',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
        data: { breadcrumb: 'Search' }
      }
    ]
  },
  {
    path: 'login',
    canActivate: [AnonymousGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    canActivate: [AnonymousGuard],
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  onSameUrlNavigation: 'reload'
  // useHash: true
});
