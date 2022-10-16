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
  loading: boolean = true;

  constructor( private activatedRoute: ActivatedRoute, private spotifyService:SpotifyService) { 
    this.activatedRoute.params.subscribe(data => {
      const id = data['id'];
      this.spotifyService.getArtist(id).subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
    })
  }

}
