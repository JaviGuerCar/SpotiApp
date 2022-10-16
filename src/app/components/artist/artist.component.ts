import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  toptracks: any[] = [];
  loading: boolean = true;

  constructor( private activatedRoute: ActivatedRoute, private spotifyService:SpotifyService) { 
    
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getArtist(id);
      this.getTopTracks(id); 
    })
  }

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      this.toptracks = topTracks;
      console.log(this.toptracks);
    });
  }

}
