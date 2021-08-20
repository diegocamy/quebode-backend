import { ParamsDictionary } from "express-serve-static-core";

export type SortBy =
  | "popularity.desc"
  | "popularity.asc"
  | "release_date.asc"
  | "release_date.desc";

export type IncludeVideo = "false" | "true";

export type Page = string;

export interface Params extends ParamsDictionary {
  sort_by: SortBy;
  include_video: IncludeVideo;
  page: Page;
  with_genres: string;
}

export interface MoviePreview {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: string[];
}

export interface MoviePreviewResponse {
  page: number;
  results: MoviePreview[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: any;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  generos: string[];
  trailers?: Trailer[];
  cast?: Actor[];
  proveedores: Proveedor[];
}

export interface Proveedor {
  nombre: string;
  enlace: string;
}

export interface Trailer {
  id: string;
  original_title: string;
  title: string;
  artist: string;
  duration: number;
  publishedAt: Date;
}

export interface TrailerResponse {
  videos: Trailer[];
  didyoumean: string;
  token: string;
  apikey: string;
}

export interface CastResponse {
  id: number;
  cast: Actor[];
  crew: CrewPerson[];
}

export interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: any;
  credit_id: string;
  department: string;
  job: string;
}
