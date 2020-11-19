import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';

const routes: Routes = [
  { path: '', component: ForumComponent },
  {
    path: 'topic',
    loadChildren: () =>
      import('./topic/topic.module').then((m) => m.TopicModule),}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
