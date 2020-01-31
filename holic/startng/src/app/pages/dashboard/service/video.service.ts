import { VideoView } from 'src/app/model/video';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VideoService {

  API_URL = '/api/account';
  constructor(private httpClient: HttpClient) {}

  getAllVideos(): Observable<VideoView[]> {
    return this.httpClient
      .get<VideoView[]>(`${this.API_URL}/videos`)
      .pipe(catchError(this.handleError));
  }

  getAllVideosByUsername(name: string): Observable<VideoView[]> {
    return this.httpClient
      .get<VideoView[]>(`${this.API_URL}/videosuser/${name}`)
      .pipe(catchError(this.handleError));
  }

  getVideo(id: number): Observable<VideoView> {
    return this.httpClient
      .get<VideoView>(`${this.API_URL}/video/${id}`)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
