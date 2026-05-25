import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-artista-component',
  standalone: false,
  templateUrl: './artista-component.html',
  styleUrl: './artista-component.css',
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  //  ESTA ES LA LÍNEA QUE FALTABA
  ngOnInit(): void {
    this.getArtista();

  }

  getArtista() {
    this.activeRoute.params
      .pipe(map(params => params['id']))
      .subscribe((id: string) => {

        // 1) Traer info del artista
        this.spotifyService.getArtista(id).subscribe((artista: any) => {
          console.log('artista', artista);
          this.artista = artista;
        });

        // 2) Traer top tracks del artista
        this.spotifyService.topTracks(id)
          .pipe(map((resp: any) => resp.tracks))
          .subscribe((pistas: any[]) => {
            console.log('tracks', pistas);
            this.topTracks = pistas;
          });

      });
  }
}
