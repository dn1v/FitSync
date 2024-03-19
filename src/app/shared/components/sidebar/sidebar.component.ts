import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    @Input() items: string[] = [];
     activeItem: string = 'requests';

    constructor(private cdr: ChangeDetectorRef) {
        this.isActive(this.activeItem)
    }

    ngOnInit(): void {
        this.cdr.detectChanges()
    }

    onActiveItem(item: string): void {
        this.activeItem = item.toLowerCase()
    }

    isActive(item: string): boolean {
        return this.activeItem === item
    }
}
