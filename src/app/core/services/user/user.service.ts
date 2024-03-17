import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError, catchError } from 'rxjs';
import { ResponseMessage } from 'src/models/deleteMessage.model';
import { UserRequest } from 'src/models/requests.model';
// import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL = 'http://localhost:3001/users'

    constructor(private http: HttpClient) { }

    sendConnectionRequest(email: string): Observable<ResponseMessage> {
        return this.http.post(`${this.BASE_URL}/me/connections`, email).pipe(
            map((data: any) => data && new ResponseMessage(data)),
            catchError((err) => this.handleError(err))
        )
    }

    getSentRequests(): Observable<UserRequest[]> {
        // return this.http.get(`${this.BASE_URL}/me/connections/sent`).pipe(
        //     map((data: any) => data && data.requests && data.requests.map((data: any) => new UserRequest(data))),
        //     catchError((err) => this.handleError(err))
        // )
        return this.getRequests(`${this.BASE_URL}/me/connections/sent`)
    }

    getReceivedRequests(): Observable<UserRequest[]> {
        // return this.http.get(`${this.BASE_URL}/me/connections/received`).pipe(
        //     map((data: any) => data && data.requests && data.requests.map((data: any) => new UserRequest(data))),
        //     catchError((err) => this.handleError(err))
        // )
        return this.getRequests(`${this.BASE_URL}/me/connections/received`)

    }

    private getRequests(endpoint: string) {
        return this.http.get(endpoint).pipe(
            map((data: any) => data && data.requests && data.requests.map((data: any) => new UserRequest(data))),
            catchError((err) => this.handleError(err))
        )
    }

    private handleError(errRes: HttpErrorResponse) {
        return throwError(() => errRes)
    }
}
// `${this.BASE_URL}/me/connections/received`