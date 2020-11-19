import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@app/core/models';
import { PostService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  public post$: Observable<Post>;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post$ = this.postService.getPost(params['postId']);
      this.post$.subscribe(
        x => console.log(x)
      );
    });
    
  }

}
