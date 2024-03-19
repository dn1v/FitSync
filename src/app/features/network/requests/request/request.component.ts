import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { UserRequest } from 'src/models/requests.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

    @Input() user: UserRequest = new UserRequest()
    @Input() sent: boolean = true
    @Output() requestEvent: EventEmitter<void> = new EventEmitter()

    constructor(private userService: UserService, private sharedService: SharedService, private authService: AuthService) {}

    ngOnInit(): void {

    }

    onAccept(): void {
        this.userService.acceptConnectionRequest(this.user._id).subscribe({
            next: this.resMsg.bind(this),
            error: (err: any) => console.log(err)
        })
    }

    onDecline(): void {

    }

    onWithdraw(): void {
        this.userService.withdrawConnectionRequest(this.user._id).subscribe({
            next: (data: ResponseMessage) => {
                console.log(data)
                this.sharedService.setResponseMessage(data)
                this.requestEvent.emit()
            },
            // next: this.resMsg,
            error: (err: any) => console.log(err)
        })
    }

    private resMsg(data: ResponseMessage): void {
        console.log(data)
        this.sharedService.setResponseMessage(data)
        this.requestEvent.emit()
    }
}
