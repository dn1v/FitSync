import { Component, Input, OnInit } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserConnection } from 'src/models/requests.model';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

    users: UserConnection[] = []
    popUp: boolean = false
    sharedService: boolean = true

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUserConnections()
    }

    getUserConnections(): void {
        this.userService.getConnections().subscribe({
            next: (users: UserConnection[]) => {
                this.users = users
                console.log(this.users)
            },
            error: (err: any) => console.log(err)
        })
    }

    onRemoveEvent(): void {
        this.getUserConnections()
        this.popUp = true
    }

    onPopUpCloseEvent(): void {
        this.popUp = false
    }
}
