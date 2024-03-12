import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseMessage } from 'src/models/deleteMessage.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL = 'http://localhost:3001/users'

    constructor(private http: HttpClient) { }

    sendConnectionRequest(email: string): Observable<ResponseMessage> {
        return this.http.post(`${this.BASE_URL}/me/connections`, email).pipe(map((data: any) => data && data.message && new ResponseMessage(data)))
    }
}
