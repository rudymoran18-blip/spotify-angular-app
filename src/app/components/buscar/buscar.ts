import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  standalone: false,
  templateUrl: './buscar.html',
  styleUrl: './buscar.css',
})
export class Buscar {

  termino:string = '';

  constructor(public spotifyService:SpotifyService) {
  }


  buscar(){
    if (this.termino.length === 0){
      return;
    }
    console.log(this.termino);
    this.spotifyService.getArtistas(this.termino).subscribe( (data:any) =>{
      console.log(data);
    } );
  }

}
