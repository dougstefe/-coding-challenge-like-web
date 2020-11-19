import { Component, OnInit } from '@angular/core';
import { Topic } from '@app/core/models';
import { PostService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  public topics$: Observable<Topic[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.topics$ = this.postService.getTopics();
  }
}
