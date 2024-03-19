import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared/shared.service';

@Component({
  selector: 'app-request-popup',
  templateUrl: './request-popup.component.html',
  styleUrls: ['./request-popup.component.css']
})
export class RequestPopupComponent implements OnInit {

    @Input() shared: boolean = false
    @Input() message: string = ''
    @Output() closeEvent: EventEmitter<void> = new EventEmitter()

    constructor(private sharedService: SharedService) {}

    ngOnInit(): void {
        // if the data is shared with shared service
        if (this.shared) this.sharedService.responseMessage$.subscribe((data) => this.message = data.message)
    }

    onClick(): void {
        this.closeEvent.emit()
    }
}
