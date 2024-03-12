import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { AuthResponse } from 'src/models/authResponse.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'FitSync';

    navbar: boolean = false

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.authService.autoLogin()
        this.authService.user.subscribe({
            next: (data: AuthResponse) => {
                if (!data?.token) {
                    this.navbar = false
                    this.router.navigate(['/login'])
                } else {
                    this.navbar = true
                    this.router.navigate(['/home'])
                }
            }
        })
    }
}
