import { Request, Response } from "express";
import fetch from "node-fetch";
import {
  Actor,
  CastResponse,
  MovieDetails,
  MoviePreviewResponse,
  Params,
  TrailerResponse,
} from "../interfaces";
import URLgenerator from "../utils/generateReqURL";
import { generos } from "../utils/genres";
const usetube = require("usetube");

const moviesController = {
  async discoverMovies(req: Request, res: Response) {
    const { sort_by, page, include_video } = req.query as Params;
    const url = URLgenerator.discover(sort_by, page, include_video);
    try {
      const resp = await fetch(url);
      const json: MoviePreviewResponse = await resp.json();

      json.results.map((m) => (m.genres = m.genre_ids.map((g) => generos[g])));

      return res.send(json);
    } catch (error) {
      return res.send(error);
    }
  },
  async trendingMovies(req: Request, res: Response) {
    const url = URLgenerator.trending();
    try {
      const resp = await fetch(url);
      const json: MoviePreviewResponse = await resp.json();

      json.results.map((m) => (m.genres = m.genre_ids.map((g) => generos[g])));

      return res.send(json);
    } catch (error) {
      return res.send(error);
    }
  },
  async movieDetails(req: Request, res: Response) {
    const { id } = req.params;
    const url = URLgenerator.movieDetails(id);
    const castURL = URLgenerator.movieCast(id);
    try {
      const resp = await fetch(url);
      const json: MovieDetails = await resp.json();
      const trailers: TrailerResponse = await usetube.searchVideo(
        json.title + "trailer"
      );
      const castResp = await fetch(castURL);
      const castJson: CastResponse = await castResp.json();
      const cast: Actor[] = castJson.cast.slice(0, 10);

      console.log(cast);
      json.trailers = trailers.videos;
      json.cast = cast;

      return res.send(json);
    } catch (error) {
      return res.send(error);
    }
  },
};

export default moviesController;
