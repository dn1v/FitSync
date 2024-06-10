import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupsService } from 'src/app/core/services/groups/groups.service';
import { Group } from 'src/models/group.model';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

    form: FormGroup = new FormGroup({
        groupName: new FormControl('',Validators.required),
        about: new FormControl('', Validators.required),
        showMembers: new FormControl(false),
        showModerators: new FormControl(false)
    })

    constructor(private groupService: GroupsService) {}

    ngOnInit(): void {

    }

    get groupName() {
        return this.form.get('groupName')
    }

    get about() {
        return this.form.get('about')
    }

    onDone(): void {
        this.groupService.createGroup(this.form.value).subscribe({
            next: (group: Group) => {
                console.log(group)
            },
            error: (err: any) => console.log(err)
        })
    }
}
