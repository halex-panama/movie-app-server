import express, { Express, Request, Response } from "express";
import cors from "cors";
import url from "url";
import "dotenv/config";
// import axios from "axios";

const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const app: Express = express();
app.use(cors());

app.listen(PORT, () => console.log(`Server listening to PORT ${PORT}`));

// Function to handle API requests to TMDb
async function tmdbRequest(endpoint: string, req: Request, res: Response) {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY!,
      language: "en-US",
      ...url.parse(req.url, true).query,
    });

    // Construct the URL for the request
    const apiUrl = `${API_URL}${endpoint}?${params.toString()}`;

    // Make the request using Axios
    // const { data } = await axios.get(apiUrl);

    // Make the request using Fetch
    const data = await (await fetch(apiUrl)).json();

    res.json(data);
  } catch (error) {
    res.json(error);
  }
}

// Route for retrieving popular movies
app.get("/popular", async (req: Request, res: Response) => {
  await tmdbRequest("movie/popular", req, res);
});

// Route for searching movies
app.get("/search", async (req: Request, res: Response) => {
  await tmdbRequest("search/movie", req, res);
});

// Route for retrieving movie information
app.get("/info/:movieId", async (req: Request, res: Response) => {
  await tmdbRequest(`movie/${req.params.movieId}`, req, res);
});

// Route for retrieving movie credits
app.get("/credits/:movieId", async (req: Request, res: Response) => {
  await tmdbRequest(`movie/${req.params.movieId}/credits`, req, res);
});

// Route for retrieving movie videos
app.get("/videos/:movieId", async (req: Request, res: Response) => {
  await tmdbRequest(`movie/${req.params.movieId}/videos`, req, res);
});

// Route for retrieving similar movies
app.get("/similar/:movieId", async (req: Request, res: Response) => {
  await tmdbRequest(`movie/${req.params.movieId}/similar`, req, res);
});
