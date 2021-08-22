import { Router } from "express";
import mc from "../controllers/movies";

const route = Router();

route.get("/discover", mc.discoverMovies);
route.get("/trending", mc.trendingMovies);
route.get("/movie/:id", mc.movieDetails);
route.get("/similar/:id", mc.getSimilarMovies);
route.get("/search", mc.searchMovies);

export default route;
