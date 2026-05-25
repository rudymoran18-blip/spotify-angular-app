import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SpotifyService {

  artistas: any[] = [];
  token: string = 'TOKEN_SPOTIFY_AQUI';
  urlSpotify: string = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) {
    console.log('SERVICIO SPOTIFY LISTO');
  }



  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });
  }


  topTracks(id: string) {
  const url = `${this.urlSpotify}artists/${id}/top-tracks?market=US`;
  const headers = this.getHeaders();
  return this.http.get<any>(url, { headers });
}


  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;
    const headers = this.getHeaders();
    return this.http.get<any>(url, { headers });
  }


  getArtistas(termino?: string) {
    const url = `${this.urlSpotify}search?q=${termino}&type=artist&limit=20&market=US`;

    const headers = this.getHeaders();

    return this.http.get<any>(url, { headers }).pipe(
      map(data => {
        this.artistas = data.artists.items;
        return this.artistas;
      })
    );
  }
}
