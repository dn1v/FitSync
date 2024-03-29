import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    fullName: string = ''

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.fullName = this.authService.user.getValue().user?.firstName + ' ' + this.authService.user.getValue().user?.lastName
    }

    onLogout(): void {
        this.authService.userLogout()
        this.router.navigate(['/login'])
    }
}
