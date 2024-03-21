import { Component, EventEmitter, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { Post } from 'src/models/post.model';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    options: boolean = false
    deleteMessage: string = ''
    // optionsText: string = 'More'
    myPost: boolean = true
    @Output() editEvent: EventEmitter<void> = new EventEmitter()
    @Output() deleteEvent: EventEmitter<void> = new EventEmitter()
    @Input() post: Post = new Post()
    constructor(
        private sharedService: SharedService,
        private postService: PostsService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        if (this.authService.user.getValue().user?._id !== this.post.authorId) {
            this.myPost = false
        }
    }

    onMore(): void {
        this.options = !this.options
    }

    onOption(): void {
        this.onMore()
    }

    onEdit(): void {
        this.sharedService.setPostData('Edit')
        this.sharedService.setPostId(this.post._id)
        this.sharedService.setPost(this.post)
        console.log('Edit handler!')
        this.editEvent.emit()
    }

    onDelete(): void {
        this.postService.deletePost(this.post._id).subscribe({
            next: (data: ResponseMessage) => {
                this.deleteMessage = data.message
                this.onOption()
                this.deleteEvent.emit()
                console.log(this.deleteMessage)
            },
            error: (err: any) => console.log(err)
        })
    }
}
