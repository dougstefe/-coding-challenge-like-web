import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeLikeModule } from 'challenge-like';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';


@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    ChallengeLikeModule
  ]
})
export class TopicModule { }
