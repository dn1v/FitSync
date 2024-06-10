import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups/groups.service';
import { Group } from 'src/models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    groups: Group[] = []

    constructor(private groupService: GroupsService) {}

    ngOnInit(): void {
        this.readGroups()
    }

    readGroups(): void {
        this.groupService.getGroups().subscribe({
            next: (groups: Group[]) => {
                this.groups = groups
                console.log(this.groups)
            },
            error: (err: any) => console.log(err)
        })
    }
}
