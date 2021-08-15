import { Request, Response } from "express";
import fetch from "node-fetch";
import { MoviePreviewResponse, Params } from "../interfaces";
import URLgenerator from "../utils/generateReqURL";
import { generos } from "../utils/genres";

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
};

export default moviesController;
