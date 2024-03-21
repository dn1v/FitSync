import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { UserConnection } from 'src/models/requests.model';

@Component({
    selector: 'app-request-form',
    templateUrl: './request-form.component.html',
    styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

    requestMessage: string = ''
    requestMessagePopUp: boolean = false
    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    })

    constructor(private userService: UserService) { }

    @Output() reqSent: EventEmitter<void> = new EventEmitter()

    ngOnInit() { }

    onSendRequest(): void {
        console.log("Look here:",)
        this.userService.sendConnectionRequest(this.form.value).subscribe({
            next: (res: ResponseMessage) => {
                this.requestMessage = res.message
                this.requestMessagePopUp = true
                this.reqSent.emit()
                console.log(res)
            },
            error: (err: any) => console.log(err)
        })
    }

    get email() {
        return this.form.get('email')
    }

    onCloseEvent(): void {
        this.requestMessagePopUp = false
    }
}

