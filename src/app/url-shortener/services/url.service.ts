import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { ShortenURLResponse } from '../interfaces/url.interface';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  shortenUrl(url: string): Observable<ShortenURLResponse> {
    return this.http.get<ShortenURLResponse>(
      `${environment.apiUrl}/shorten?url=${url}`
    );
  }
}
