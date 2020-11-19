import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Like, Post } from '@app/core/models';
import { LikeService, PostService, UserService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  public post$: Observable<Post>;
  public like$: Observable<Like>;

  constructor(private postService: PostService, private likeService: LikeService, private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post$ = this.postService.getPost(params['postId']);
      this.userService.getId().subscribe(
        user => {
          this.like$ = this.likeService.getLike(params['postId'], user.id)
        }
      );
    });
  }

  like(){
    
  }

  dislike(){
    
  }

}
