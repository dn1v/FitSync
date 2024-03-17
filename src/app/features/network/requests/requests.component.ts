import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
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

    constructor(private userService: UserService) { }

    ngOnInit() {
         this.onSent()
    }

    onSent(): void {
        this.sent = true
        this.userService.getSentRequests().subscribe({
            next: (reqs: UserRequest[]) => {
                this.requests = reqs
                console.log(this.requests)
            },
            error: (err: any) => console.log(err)
        })
        // this.userService.getSentRequests().subscribe({
        //     next: (reqs: UserRequest[]) => {
        //         this.sentRequests = reqs
        //         console.log(this.sentRequests)
        //     },
        //     error: (err: any) => console.log(err)
        // })
    }

    private nextReqs(sentReqs: UserRequest[]): void {
        this.requests = sentReqs
        console.log(this.requests)
    }

    onReceived(): void {
        this.sent = false
        // this.userService.getReceivedRequests().subscribe({
        //     next: (reqs: UserRequest[]) => {
        //         this.receivedRequests = reqs
        //         console.log(this.receivedRequests)
        //     },
        //     error: (err: any) => console.log(err)
        // })
        this.userService.getReceivedRequests().subscribe({
            next: (reqs: UserRequest[]) => {
                this.requests = reqs
                console.log(this.requests)
            },
            error: (err: any) => console.log(err)
        })
    }
}
