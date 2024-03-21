import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models/post.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseMessage } from 'src/models/deleteMessage.model';
@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private readonly BASE_URL = 'http://localhost:3001/posts'

    constructor(private http: HttpClient) { }

    createPost(obj: any): Observable<Post> {
        return this.http.post(this.BASE_URL, obj).pipe(
            map((data: any) => data && data.post && new Post(data.post)),
            catchError((err) => this.handleError(err)))
    }

    getGeneralPosts(): Observable<Post[]> {
        return this.http.get(`${this.BASE_URL}/general`).pipe(
            map((data: any) => data && data.posts && data.posts.map((data: any) => new Post(data))),
            catchError((err) => this.handleError(err))
        )
    }

    updatePost(id: string, obj: any): Observable<Post> {
        return this.http.patch(`${this.BASE_URL}/${id}`, obj).pipe(
            map((data: any) => data && data.post && new Post(data.post)),
            catchError((err) => this.handleError(err)))
    }

    deletePost(id: string): Observable<ResponseMessage> {
        return this.http.delete(`${this.BASE_URL}/${id}`).pipe(
            map((data: any) => data && data.message && new ResponseMessage(data)),
            catchError((err) => this.handleError(err))
        )
    }

    getGeneralPostsFromOhterUser(id: string): Observable<Post[]> {
        return this.http.get(`${this.BASE_URL}/general/${id}`).pipe(
            map((data: any) => data && data.posts && data.posts.map((post: any) => new Post(post))),
            catchError((err) => this.handleError(err))
        )
    }

    private handleError(errRes: HttpErrorResponse) {
        return throwError(() => errRes)
    }
}
