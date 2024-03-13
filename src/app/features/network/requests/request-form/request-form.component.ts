import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

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
