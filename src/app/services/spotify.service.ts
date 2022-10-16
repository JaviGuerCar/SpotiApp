import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQApPv-6jZiYsq8hdhdVA3mhUSu76w2CaOR5fkko8wtpiiePu1rMM_g1oLzafQWVTqBAQGcNQjFmYvNVKEPdh_1j4Zpqg-q5MXUQXQsBY2ojXQh0WlI'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
      .pipe(map( (data:any) => data['albums'].items));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist`)
      .pipe(map( (data:any) => data['artists'].items));
  }
}
