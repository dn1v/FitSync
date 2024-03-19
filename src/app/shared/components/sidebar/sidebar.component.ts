import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    @Input() items: string[] = [];
    @Input() activeItem: string = '';

    constructor() { }

    ngOnInit(): void {
        this.activeItem = this.activeItem.toLowerCase()
    }

    onActiveItem(item: string): void {
        this.activeItem = item.toLowerCase()
    }
}
