import { SortBy, Page, IncludeVideo } from "../interfaces";

export default (
  endpoint: string,
  sort_by: SortBy = "popularity.desc",
  page: Page = "1",
  include_video: IncludeVideo = "false"
): string => {
  const URL = `https://api.themoviedb.org/3/${endpoint}/movie?api_key=${process.env.API_KEY}&language=es-ES&sort_by=${sort_by}&include_video=${include_video}&page=${page}&include_adult=false`;

  return URL;
};