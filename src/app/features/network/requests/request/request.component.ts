import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserRequest } from 'src/models/requests.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

    @Input() user: UserRequest = new UserRequest()
    @Input() sent: boolean = true

    constructor(private userService: UserService) {}

    ngOnInit(): void {

    }

    onAccept(): void {

    }

    onDecline(): void {
        
    }

    onWithdraw(): void {

    }


}
