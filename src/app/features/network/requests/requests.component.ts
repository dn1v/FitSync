import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { UserRequest } from 'src/models/requests.model';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

    sent: boolean = true
    requests: UserRequest[] = []
    sentRequests: UserRequest[] = []
    receivedRequests: UserRequest[] = []
    responseMessage: ResponseMessage = new ResponseMessage()
    popUp: boolean = false

    constructor(
        private userService: UserService,
        private sharedService: SharedService
    ) { }

    ngOnInit() {
        this.onSent()
        this.sharedService.responseMessage$.subscribe(resMessage => this.responseMessage = resMessage)
        console.log('Requests =>', this.responseMessage)
    }

    onSent(): void {
        this.userService.getSentRequests().subscribe({
            next: (reqs: UserRequest[]) => {
                this.sent = true
                this.requests = reqs

                console.log(this.requests)
            },
            error: (err: any) => console.log(err)
        })
    }

    private nextReqs(sentReqs: UserRequest[], sent: boolean): void {
        this.sent = sent
        this.requests = sentReqs
        console.log(this.requests)
    }

    onReceived(): void {
        this.userService.getReceivedRequests().subscribe({
            next: (reqs: UserRequest[]) => {
                this.sent = false
                this.requests = reqs
                console.log(this.requests)
            },
            error: (err: any) => console.log(err)
        })
    }

    onWithdrawEvent(): void {
        this.popUp = true
        this.ngOnInit()
    }

    onPopUpClose(): void {
        this.popUp = false
    }
}
