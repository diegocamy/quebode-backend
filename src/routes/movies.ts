import { Router } from "express";
import mc from "../controllers/movies";

const route = Router();

route.get("/discover", mc.discoverMovies);

export default route;
