import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { UserConnection } from 'src/models/requests.model';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

    @Input() user: UserConnection = new UserConnection()
    @Output() removeEvent: EventEmitter<void> = new EventEmitter()
    
    constructor(
        private userService: UserService,
        private sharedService: SharedService
    ) { }

    ngOnInit(): void {

    }

    onRemove(): void {
        this.userService.removeConnection(this.user._id).subscribe({
            next: (message: ResponseMessage) => {
                this.sharedService.setResponseMessage(message)
                this.removeEvent.emit()
            },
            error: (err: any) => console.log(err)
        })
    }

}
