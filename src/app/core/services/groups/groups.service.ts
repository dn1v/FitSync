import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Group } from 'src/models/group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {

    private readonly BASE_URL = 'http://localhost:3001/groups'

    constructor(private http: HttpClient) { }

    createGroup(obj: any): Observable<Group> {
        return this.http.post(this.BASE_URL, obj).pipe(
            map((data: any) => data && data.group && new Group(data.group)),
            catchError((err) => this.handleError(err))
        )
    }

    getGroups(): Observable<Group[]> {
        return this.http.get(this.BASE_URL).pipe(
            map((data: any) => data && data.groups && data.groups.map((group: any) => new Group(group))),
            catchError((err) => this.handleError(err))
        )
    }

    private handleError(errRes: HttpErrorResponse) {
        return throwError(() => errRes)
    }
}
