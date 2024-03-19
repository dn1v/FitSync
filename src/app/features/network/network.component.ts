import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-network',
    templateUrl: './network.component.html',
    styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

    sidebarItems: string[] = ['Connections', 'Groups', 'Requests']
    activeItem: string = 'requests'

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.navigate(['network', this.activeItem])
    }
}
