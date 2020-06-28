import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post';
import { Comment } from './comments';

@Injectable({ providedIn: 'root' })

export class PostService {

  private postsUrl = 'http://localhost:9001/posts';
  private commentUrl = "http://localhost:9001/comments";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** 
   * GET all the posts from the server
   * Sorted by date
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        map(Post => Post.sort((a, b) => 
        new Date(b.publish_date).getTime() - 
        new Date(a.publish_date).getTime())),
        tap(_ => console.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  /** 
   * GET post by id. 
   * Return `undefined` when id not found 
   */
  getPostNo404<Data>(id: number): Observable<Post> {
    const url = `${this.postsUrl}/?id=${id}`;
    return this.http.get<Post[]>(url)
      .pipe(
        map(posts => posts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} post id=${id}`);
        }),
        catchError(this.handleError<Post>(`getPost id=${id}`))
      );
  }

  /** 
   * GET post by id.
   * Will 404 if id not found 
  */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => console.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

    /** GET comment by id. Will 404 if id not found */
    getComment(id: number): Observable<Comment> {
      const url = `${this.commentUrl}/${id}`;
      return this.http.get<Comment>(url).pipe(
        tap(_ => console.log(`fetched comment id=${id}`)),
        catchError(this.handleError<Comment>(`getComment id=${id}`))
      );
    }

    /** POST: add comment to the post */
    addComment(comment: Comment): Observable<Comment> {
      return this.http.post<Comment>(this.commentUrl, comment, this.httpOptions).pipe(
        tap((newComment: Comment) => console.log(`added comment w/ id=${newComment.id}`)),
        catchError(this.handleError<Comment>('addComment'))
      );
    }

  /** DELETE: delete the comment from the server */
  deleteHero(hero: Comment | number): Observable<Comment> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.commentUrl}/${id}`;

    return this.http.delete<Comment>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Comment>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - title of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}