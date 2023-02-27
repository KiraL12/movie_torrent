
/* . film !== undefined && typeof film === "object"*/
import { Season } from './interfaces'
import { MediaType } from './pages/types'
import { Films } from './interfaces'
export const mergeClassName = (val1: string, val2?: string) => {
  return val1 + ' ' + (val2 || '')
}

export const formatResult = (obj: any, mediaType?: MediaType): Films => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    description: obj.overview,
    coverPath: obj.backdrop_path,
    posterPath: obj.poster_path,
    genreIds: obj.genre_ids || obj.genres?.map((g: any) => g.id) || [],
    mediaType: mediaType || obj.media_type,
    seasons:
      obj.seasons?.map(
        (season: any) =>
          ({
            id: season.id,
            filmName: obj.title,
            name: season.name,
            posterPath: season.poster_path,
            seasonNumber: season.season_number,
            airDate: season.air_date,
            episodes: [],
          } satisfies Season)
      ) || [],
  }
}

export const isFilm = (film: any): film is Films => {
  return film !== undefined && typeof film === "object"
}

export const tmdbImageSrc = (path: string) => {
  if (!path) {
    return '';
  }else{
    return `https://image.tmdb.org/t/p/original/${path}`
  }
}

export const mergeFilms = (movies: Films[], tvs: Films[], limit = 6) => {
  const arrs: Films[] = []

  for (let i = 0; i < limit; i++) {
    let film: unknown

    if (i % 2 == 1) {
      if (tvs[i - 1]) {
        film = tvs[i - 1]
      }
    } else {
      if (movies[i - 1]) {
        film = tvs[i - 1]
      }
    }

    if (isFilm(film)) arrs.push(film)
  }

  return arrs
}

export const youtubeThumbnail = (key: string) => {
  return `https://img.youtube.com/vi/${key}/mqdefault.jpg`
}

export const formatDate = (val: string) => {
  const d = new Date(val)

  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
}