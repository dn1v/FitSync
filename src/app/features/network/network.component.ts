import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-network',
    templateUrl: './network.component.html',
    styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

    sidebarItems: string[] = ['Connections', 'Groups', 'Requests']

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log('ngOnInit!!!')
        this.router.navigate(['network', 'requests'])

    }
}
