import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { credentials } from 'src/environments/credentials';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': credentials.token
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases')
      .pipe(map( (data:any) => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist`)
      .pipe(map( (data:any) => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }
}
