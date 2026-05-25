# Spotify Angular App

Aplicación desarrollada con Angular para búsqueda de artistas utilizando Spotify Web API.

## Tecnologías utilizadas

- Angular
- TypeScript
- RxJS
- HttpClient
- Bootstrap

## Características

- Búsqueda de artistas
- Visualización de información del artista
- Consumo de APIs REST
- Manejo de observables con RxJS

## Importante

Spotify actualmente requiere:

- Cuenta Spotify Premium
- Token válido de acceso
- Renovación manual del token aproximadamente cada 1 hora

Por motivos de seguridad el token no se incluye en el repositorio.

Debe agregarse manualmente en:

src/app/services/spotify.service.ts

## Generar token Spotify

1. Crear aplicación en Spotify Developer Dashboard
2. Obtener Client ID y Client Secret
3. Generar access token usando OAuth Client Credentials Flow

## Configuración

Este proyecto utiliza Spotify Web API.

Debido a restricciones actuales de Spotify:

- Se requiere una cuenta Spotify Premium
- El token expira aproximadamente cada 1 hora
- Debe reemplazarse manualmente en el servicio SpotifyService

Para generar un token:
1. Crear app en Spotify Developer Dashboard
2. Obtener Client ID y Client Secret
3. Generar access token usando OAuth Client Credentials Flow
