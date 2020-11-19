import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Like } from '@app/core/models';
import { Observable, of } from 'rxjs';
import * as ChallengeLike from 'coding-challenge-like-vanilla';

@Injectable({ providedIn: 'root' })
export class LikeService {
    private challengeLike: ChallengeLike;
    constructor() {
        this.challengeLike = new ChallengeLike({
            endpoint: 'xpto',
            trackCode: 'xpto'
        });
    }

    getLike(postId, userId): Observable<any>{
        return this.challengeLike.get(postId, userId);
    }

    postLike(postId, userId): Observable<any>{
        return this.challengeLike.get(postId, userId);
    }

    postDislike(postId, userId): Observable<any>{
        return this.challengeLike.get(postId, userId);
    }

    putLike(postId, userId): Observable<any>{
        return this.challengeLike.get(postId, userId);
    }


}