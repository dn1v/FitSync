import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ErrorResponse } from 'src/interfaces/errorResponse.interface';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

    @Input() errorResponse: ErrorResponse  | null = null
    @Output() closeEvent: EventEmitter<void> = new EventEmitter()

    constructor() {}

    ngOnInit(): void {

    }

    onClick(): void {
        this.closeEvent.emit()
    }
}
