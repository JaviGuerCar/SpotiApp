import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string = '';

  constructor(private spotifyService: SpotifyService) { }

  searchArtist(term:any){
    this.loading = true;
    
    this.spotifyService.getArtists(term).subscribe( (data:any) => {
      this.artists = data;
      this.loading = false;
    }, (errorService) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService.error.error.message;
    });
  }

}
