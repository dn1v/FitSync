import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Post } from 'src/models/post.model';

@Component({
    selector: 'app-connection-details',
    templateUrl: './connection-details.component.html',
    styleUrls: ['./connection-details.component.css']
})
export class ConnectionDetailsComponent implements OnInit {

    generalPosts: Post[] = []
    userId: string = ''

    constructor(
        private userService: UserService,
        private postsService: PostsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(({ id }: Params) => {
            this.userId = id
            this.postsService.getGeneralPostsFromOhterUser(this.userId).subscribe({
                next: (posts: Post[]) => {
                    this.generalPosts = posts
                    console.log(this.generalPosts)
                },
                error: (err: any) => console.log(err)
            })

        })
    }
}
