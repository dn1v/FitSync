import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { Post } from 'src/models/post.model';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private postData: BehaviorSubject<string> = new BehaviorSubject('')
    private postId: BehaviorSubject<string> = new BehaviorSubject('')
    private post: BehaviorSubject<Post> = new BehaviorSubject(new Post())
    private responseMessage: BehaviorSubject<ResponseMessage> = new BehaviorSubject(new ResponseMessage())

    postData$ = this.postData.asObservable()
    postId$ = this.postId.asObservable()
    post$ = this.post.asObservable()
    responseMessage$ = this.responseMessage.asObservable()

    constructor() { }

    setPostData(data: string) {
        this.postData.next(data)
    }

    setPostId(id: string) {
        this.postId.next(id)
    }

    setPost(post: Post) {
        this.post.next(post)
    }

    setResponseMessage(responseMessage: ResponseMessage) {
        this.responseMessage.next(responseMessage)
    }
}
