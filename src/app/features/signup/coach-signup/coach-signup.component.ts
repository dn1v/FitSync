import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CoachSignup } from 'src/interfaces/coachSignup.interface';
import { ErrorResponse } from 'src/interfaces/errorResponse.interface';
import { AuthResponse } from 'src/models/authResponse.model';
@Component({
  selector: 'app-coach-signup',
  templateUrl: './coach-signup.component.html',
  styleUrls: ['./coach-signup.component.css']
})
export class CoachSignupComponent implements OnInit {

    @Output() signup: EventEmitter<void> = new EventEmitter()
    @Output() success: EventEmitter<void> = new EventEmitter()
    @Output() err: EventEmitter<void> = new EventEmitter()
    errorResponse: ErrorResponse | null = null
    form: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        role: new FormControl('Coach'),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
        position: new FormControl('', Validators.required)
    }, { validators: this.passwordCheck })

    constructor(private authService: AuthService, private router: Router) { }

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

    get position() {
        return this.form.get('position')
    }

    get role() {
        return this.form.get('role')
    }

    onSignup(): void {
        // this.signup.emit(true)
        this.success.emit()

        let obj: CoachSignup = {
            firstName: this.form.controls['firstName'].value,
            lastName: this.form.controls['lastName'].value,
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value,
            role: this.form.controls['role'].value,
            position: this.form.controls['position'].value
        }

        this.authService.userSignup(obj).subscribe({
            next: (data: AuthResponse) => {
                console.log(data)
                // this.signup.emit(false)
                this.success.emit()
                this.router.navigate(['/home'])
            },
            error: (err: any) => {
                // this.signup.emit(false)
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
