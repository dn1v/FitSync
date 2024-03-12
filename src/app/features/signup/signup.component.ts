import { Component, OnInit } from '@angular/core';
import { ErrorResponse } from 'src/interfaces/errorResponse.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    athleteRole: boolean = false
    coachRole: boolean = false
    spinnerActive: boolean = false
    errorResponse: ErrorResponse | null = null

    constructor() { }

    ngOnInit(): void {

    }

    onAthleteRole(): void {
        this.athleteRole = true
    }

    onCoachRole(): void {
        this.coachRole = true
    }

    onChangeRole(): void {
        this.coachRole = false
        this.athleteRole = false
    }

    onSignupEvent(): void {
        this.spinnerActive = true
        // console.log('should be false:', bool, 'spinner should be false:', this.spinnerActive)
    }

    onSuccessEvent(): void {
        this.spinnerActive = false
    }

    onErrEvent(): void {
        this.spinnerActive = false
    }

    onErrorResEvent(obj: ErrorResponse | null) {
        this.errorResponse = obj
    }
}
