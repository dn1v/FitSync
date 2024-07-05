import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from 'src/app/core/services/groups/groups.service';
import { Group } from 'src/models/group.model';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  groupId: string = ''
  group: Group = new Group()

  constructor(private groupService: GroupsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupId = params['id']
      this.readGroup(this.groupId)
    })
  }

  readGroup(id: string): void {
    this.groupService.getGroup(id).subscribe({
      next: (group: Group) => {
        this.group = group
        console.log("GROUP FROM GROUP DETAILS COMPONENT:", group)
      },
      error: (err: any) => console.log(err)
    })
  }

}
