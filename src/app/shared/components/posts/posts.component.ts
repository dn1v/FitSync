import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { Post } from 'src/models/post.model';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    // @Input() groupId: string = ''
    @Input() generalPost: boolean = true
    modalOpen: boolean = false
    posts: Post[] = []
    canCreatePost: boolean = true
    constructor(
        private authService: AuthService,
        private postService: PostsService
    ) { }

    ngOnInit(): void {
        if (
            this.generalPost &&
            this.authService.user.getValue().user?.__t === 'Athlete'
        ) {
            this.canCreatePost = false
        }

        this.getPosts()
    }

    modalToggle(): void {
        this.modalOpen = !this.modalOpen
    }

    onCreatePost() {
        this.modalToggle()
    }

    onEditEvent(): void {
        this.modalToggle()
    }

    onModalClosed(): void {
        this.modalToggle()
    }

    getPosts(): void {
        if (this.generalPost) {
            this.postService.getGeneralPosts().subscribe({
                next: (posts: Post[]) => {
                    console.log(posts)
                    this.posts = posts
                },
                error: (err: any) => console.log(err)
            })
        }
    }

    onPostSub(): void {
        this.getPosts()
    }

    onDeleteEvent(): void {
        this.getPosts()
    }
}
