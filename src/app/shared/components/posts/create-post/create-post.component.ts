import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared/shared.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

    @Output() createPost: EventEmitter<void> = new EventEmitter()

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {

    }

    onCreate(): void {
        this.createPost.emit()
        this.sharedService.setPostData('Post')
    }
}
