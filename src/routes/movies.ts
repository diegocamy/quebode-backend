import { Router } from "express";
import mc from "../controllers/movies";

const route = Router();

route.get("/discover", mc.discoverMovies);
route.get("/trending", mc.trendingMovies);

export default route;
