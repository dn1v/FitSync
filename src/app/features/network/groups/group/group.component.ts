import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group = new Group()

  constructor() { }

  ngOnInit(): void {
    
  }

}
