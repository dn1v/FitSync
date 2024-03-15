import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

    sent: boolean = true

    constructor() { }

    ngOnInit() { }

    onSent(): void {
        this.sent = true
    }

    onReceived(): void {
        this.sent = false
    }

}
