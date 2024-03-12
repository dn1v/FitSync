import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ErrorResponse } from 'src/interfaces/errorResponse.interface';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { AthleteSignup } from 'src/interfaces/athleteSignup.interface';
import { AuthResponse } from 'src/models/authResponse.model';

@Component({
    selector: 'app-athlete-signup',
    templateUrl: './athlete-signup.component.html',
    styleUrls: ['./athlete-signup.component.css']
})
export class AthleteSignupComponent implements OnInit {

    @Output() signup: EventEmitter<void> = new EventEmitter()
    @Output() success: EventEmitter<void> = new EventEmitter()
    @Output() err: EventEmitter<void> = new EventEmitter()
    errorResponse: ErrorResponse | null = null
    form: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        role: new FormControl('Athlete'),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.passwordCheck })

    constructor(private authService: AuthService, router: Router) {

    }

    ngOnInit(): void {

    }

    passwordCheck(group: AbstractControl): { [key: string]: any } | null {
        const form = group as FormGroup
        return form.controls['password'].value === form.controls['confirmPassword'].value ? null : { notSame: true }
    }

    get firstName() {
        return this.form.get('firstName')
    }

    get lastName() {
        return this.form.get('lastName')
    }

    get email() {
        return this.form.get('email')
    }

    get password() {
        return this.form.get('password')
    }

    get confirmPassword() {
        return this.form.get('confirmPassword')
    }


    onSignup(): void {
        this.signup.emit()
        let obj: AthleteSignup = {
            firstName: this.form.controls['firstName'].value,
            lastName: this.form.controls['lastName'].value,
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value,
            role: this.form.controls['role'].value
        }
        this.authService.userSignup(obj).subscribe({
            next: (data: AuthResponse | null) => {
                if (data?.token) {
                    console.log(data)
                    this.success.emit()
                }
            },
            error: (err: any) => {
                console.log(err)
                this.err.emit()
                this.form.reset()
                this.errorResponse = {
                    status: err.status,
                    message: err.error.error.message,
                    data: { reason: err.error.error.data }
                }
                console.log(this.errorResponse)
            }
        })
    }

    onCloseEvent(): void {
        this.errorResponse = null
    }
}


