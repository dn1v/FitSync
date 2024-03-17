import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request-popup',
  templateUrl: './request-popup.component.html',
  styleUrls: ['./request-popup.component.css']
})
export class RequestPopupComponent implements OnInit {

    @Input() message: string = ''
    @Output() closeEvent: EventEmitter<void> = new EventEmitter()

    constructor() {}

    ngOnInit(): void {

    }

    onClick(): void {
        this.closeEvent.emit()
    }
}
