import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { UserRequest } from 'src/models/requests.model';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    })

    constructor(private userService: UserService) { }

    ngOnInit() { }

    onSendRequest(): void {
        console.log("Look here:", )
        this.userService.sendConnectionRequest(this.form.value).subscribe({
            next: (res: ResponseMessage) => {
                console.log(res)
            },
            error: (err: any) => console.log(err)
        })
    }

    get email() {
        return this.form.get('email')
    }
}

