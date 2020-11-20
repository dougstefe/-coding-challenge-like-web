import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, User } from '@app/core/models';
import { PostService, UserService } from '@app/core/services';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  public post$: Observable<Post>;
  public user: User;
  public endpoint: string;
  public trackCode: string = 'xpto';

  constructor(private postService: PostService, private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post$ = this.postService.getPost(params['postId']);
      this.userService.getId().subscribe(
        user => {
          this.user = user;
        }
      );
    });
    this.endpoint = environment.LIKE_API;
  }

}
