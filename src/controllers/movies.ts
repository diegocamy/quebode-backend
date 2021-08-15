import { Request, Response } from "express";

const moviesController = {
  async discoverMovies(req: Request, res: Response) {
    res.send("moviediscover");
  },
};

export default moviesController;
