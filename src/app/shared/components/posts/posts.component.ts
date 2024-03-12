import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    constructor(private route: ActivatedRoute, private postService: PostsService) { }

    ngOnInit(): void {
        // console.log(this.generalPost)
        // this.route.params.subscribe((params: Params) => this.groupId = params['id'])
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
        // console.log('Post')
        // console.log('Post')
        // console.log('Post')
        // console.log('Post')
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
        console.log('REQUESTING POSTS!!!')
        this.getPosts()
    }

    onDeleteEvent(): void {
        this.getPosts()
    }
}
