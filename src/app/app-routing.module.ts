import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
      path: 'home',
      loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
      path: 'forum',
      loadChildren: () =>
          import('./pages/forum/forum.module').then((m) => m.ForumModule),
  },
  {
      path: '**',
      redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
