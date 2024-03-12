import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from 'src/models/authResponse.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ErrorResponse } from 'src/interfaces/errorResponse.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    spinnerActive: boolean = false

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
    })

    errorObj: ErrorResponse | null = null

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void { }

    get email() {
        return this.form.get('email')
    }

    get password() {
        return this.form.get('password')
    }

    onLogin(): void {
        this.spinnerActive = true
        this.authService.userLogin(this.form.value).subscribe({
            next: (data: AuthResponse) => {
                if (data?.token) {
                    this.router.navigate(['/home'])
                    this.spinnerActive = false
                }
            },
            error: (err: any) => {
                this.spinnerActive = false
                console.log('This is error message -> ', err)
                this.errorObj = {
                    status: err.status || 503,
                    message: err.message || err.error?.error?.message,
                    data: err.error?.error?.data || ''
                }
                console.log(this.errorObj)
            }
        })
    }

    onCloseEvent(): void {
        this.errorObj = null
    }
}
