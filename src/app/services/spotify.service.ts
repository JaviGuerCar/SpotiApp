import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBPBpjPdsgzQOSug0rxGQjFYUwkZlhT89YEeUUslmTBvWDCtsYgUiFia0AatvCRns6z-8J9-p3gy50eB4EveoGxP2ECjye3J7oJ1aK3l8pD5mmseGU'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(data => {
      console.log(data);
    })
  }
}
