import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  seeArtist(item:any) {
    let artistId;
    artistId = item.type === 'artist' ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', artistId]);
  }

}
