import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { Post } from 'src/models/post.model';

@Component({
    selector: 'app-post-form-popup',
    templateUrl: './create-and-edit-post-popup.component.html',
    styleUrls: ['./create-and-edit-post-popup.component.css']
})
export class CreateAndEditPostPopupComponent implements OnInit {

    userId: string | undefined = ''
    postId: string | undefined = ''
    postToUpdate: Post = new Post()
    @Input() groupId: string = ''
    @Input() isGeneral: boolean = true
    @Input() author: string = ''
    @Output() modalClosed: EventEmitter<void> = new EventEmitter()
    @Output() postSub: EventEmitter<void> = new EventEmitter()
    btnText: string = ''
    form: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        content: new FormControl('', Validators.required),
        url: new FormControl('')
    })

    constructor(
        private sharedService: SharedService,
        private postService: PostsService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.sharedService.postData$.subscribe(data => this.btnText = data)
        this.sharedService.post$.subscribe(post => this.postToUpdate = post)
        if (this.postToUpdate._id) this.form.patchValue(this.postToUpdate)
        this.userId = this.authService.user.getValue().user?._id
        this.author =
            this.authService.user.getValue().user?.firstName + " " +
            this.authService.user.getValue().user?.lastName
    }

    onModalClose(): void {
        this.modalClosed.emit()
    }

    onPost(): void {
        let post = {

            isGeneral: this.isGeneral,
            title: this.form.controls['title'].value,
            content: this.form.controls['content'].value,
            url: this.form.controls['url'].value
        }

        if (this.btnText === 'Post') {
            this.postService.createPost(post).subscribe({
                next: (post: Post) => {
                    console.log(post)
                    this.postSub.emit()
                    this.onModalClose()
                },
                error: (err: any) => console.log(err)
            })
        } else {
            console.log('Edit clicked!')
            this.postService.updatePost(this.postToUpdate._id, this.form.value).subscribe({
                next: (post: Post) => {
                    console.log(post)
                    this.postSub.emit()
                    this.onModalClose()
                },
                error: (err: any) => console.log(err)
            })
        }
    }

    get title() {
        return this.form.get('title')
    }

    get content() {
        return this.form.get('content')
    }

    get url() {
        return this.form.get('url')
    }
}


