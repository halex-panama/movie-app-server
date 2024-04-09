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
const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;
const API_URL = "https://api.themoviedb.org/3/";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.listen(PORT, () => console.log(`Server listening to PORT ${PORT}`));
app.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json("succes");
}));
app.get("/popular", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams(Object.assign({ api_key: API_KEY, language: "en-US" }, url_1.default.parse(req.url, true).query));
        const response = yield fetch(`${API_URL}movie/popular?${params}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.json(error);
    }
}));
app.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams(Object.assign({ api_key: API_KEY, language: "en-US" }, url_1.default.parse(req.url, true).query));
        const response = yield fetch(`
    ${API_URL}search/movie?${params}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.json(error);
    }
}));
app.get("/info/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams({
            api_key: API_KEY,
        });
        const response = yield fetch(`${API_URL}movie/${req.params.movieId}?${params}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.json(error);
    }
}));
app.get("/credits/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams({
            api_key: API_KEY,
        });
        const response = yield fetch(`${API_URL}movie/${req.params.movieId}/credits?${params}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.json(error);
    }
}));
app.get("/videos/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams({
            api_key: API_KEY,
        });
        const response = yield fetch(`${API_URL}movie/${req.params.movieId}/videos?${params}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.json(error);
    }
}));
app.get("/similar/:movieId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = new URLSearchParams({
            api_key: API_KEY,
        });
        const response = yield fetch(`${API_URL}movie/${req.params.movieId}/similar?${params}`);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.json(error);
    }
}));
//# sourceMappingURL=index.js.map