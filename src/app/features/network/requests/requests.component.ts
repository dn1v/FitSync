import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    })

    constructor() { }

    ngOnInit() { }

    onSendRequest(): void {
        console.log(this.email?.value)
    }

    get email() {
        return this.form.get('email')
    }
}
