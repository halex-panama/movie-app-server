"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const url_1 = __importDefault(require("url"));
require("dotenv/config");
// import axios from "axios";
const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;
const API_URL = "https://api.themoviedb.org/3/";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.listen(PORT, () => console.log(`Server listening to PORT ${PORT}`));
// Function to handle API requests to TMDb
function tmdbRequest(endpoint, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const params = new URLSearchParams(Object.assign({ api_key: API_KEY, language: "en-US" }, url_1.default.parse(req.url, true).query));
            // Construct the URL for the request
            const apiUrl = `${API_URL}${endpoint}?${params.toString()}`;
            // Make the request using Axios
            // const { data } = await axios.get(apiUrl);
            // Make the request using Fetch
            const data = yield (yield fetch(apiUrl)).json();
            res.json(data);
        }
        catch (error) {
            res.json(error);
        }
    });
}
// Route for retrieving popular movies
app.get("/popular", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tmdbRequest("movie/popular", req, res);
}));
// Route for searching movies
app.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tmdbRequest("search/movie", req, res);
}));
// Route for retrieving movie information
app.get("/info/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tmdbRequest(`movie/${req.params.movieId}`, req, res);
}));
// Route for retrieving movie credits
app.get("/credits/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tmdbRequest(`movie/${req.params.movieId}/credits`, req, res);
}));
// Route for retrieving movie videos
app.get("/videos/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tmdbRequest(`movie/${req.params.movieId}/videos`, req, res);
}));
// Route for retrieving similar movies
app.get("/similar/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tmdbRequest(`movie/${req.params.movieId}/similar`, req, res);
}));
//# sourceMappingURL=index.js.map