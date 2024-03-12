import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, catchError, throwError } from 'rxjs';
import { AuthResponse } from 'src/models/authResponse.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly BASE_URL = 'http://localhost:3001/users'

    user = new BehaviorSubject<AuthResponse>(new AuthResponse())

    constructor(private http: HttpClient, private router: Router) { }

    userSignup(obj: any): Observable<AuthResponse> {
        return this.http.post(this.BASE_URL, obj).pipe(
            map((data: any) => this.handleAuth(data)),
            catchError((err) => this.handleError(err))
        )
    }

    userLogin(obj: any): Observable<AuthResponse> {
        return this.http.post(`${this.BASE_URL}/login`, obj).pipe(
            map((data: any) => this.handleAuth(data)),
            catchError((err) => this.handleError(err))
        )
    }

    autoLogin() {
        const data = JSON.parse(localStorage.getItem('userData') || '{}')
        // if (data?.token) this.user.next(data)
        // else this.user.next(null)

        this.user.next(new AuthResponse(data))
    }

    userLogout(): Observable<any> {
        this.deleteAndNavigateAfterLogout()
        return this.http.post(`${this.BASE_URL}/me/logout`, {}).pipe(
            catchError((err) => this.handleError(err))
        )
    }

    deleteAndNavigateAfterLogout(): void {
        this.user.next(new AuthResponse())
        localStorage.removeItem('userData')
        this.router.navigate(['/login'])
    }

    handleAuth(data: any) {
        console.log(data)
        this.user.next(new AuthResponse(data))
        localStorage.setItem('userData', JSON.stringify(data))
        return data
    }

    handleError(errRes: HttpErrorResponse) {
        return throwError(() => errRes)
    }

    isLoggedIn(): boolean {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        return !!userData.token;
    }
}
