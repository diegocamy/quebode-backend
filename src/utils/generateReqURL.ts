import { SortBy, Page, IncludeVideo } from "../interfaces";

const urlGenerator = {
  discover(
    sort_by: SortBy = "popularity.desc",
    page: Page = "1",
    include_video: IncludeVideo = "false"
  ): string {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=es-ES&sort_by=${sort_by}&include_video=${include_video}&page=${page}&include_adult=false`;

    return URL;
  },
  trending() {
    const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&language=es-ES`;

    return URL;
  },
};

export default urlGenerator;
