import youtubeSearch, { YouTubeSearchOptions } from "youtube-search";

const opts: YouTubeSearchOptions = {
  key: process.env.YOUTUBE_API_KEY,
  maxResults: 6,
};

export async function searchTrailer(movie: string) {
  try {
    const { results } = await youtubeSearch(movie, opts);
    return results;
  } catch (err) {
    console.log(err);
  }
}
