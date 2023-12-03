const fetch = require("node-fetch");

const baseurl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseurl + "movie/now_playing?language=ko-KR";
const topRatedUrl = baseurl + "movie/top_rated?language=ko-KR";
const upcomingUrl = baseurl + "movie/upcoming?language=ko-KR";
const genreListUrl = baseurl + "genre/movie/list?language=ko";
const dayTrendUrl = baseurl + "trending/movie/day?language=ko-KR";
const weekTrendUrl = baseurl + "trending/movie/week?language=ko-KR";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwMGUyZTZhZTI1NjcxNmIzM2JmMGU5NzZjN2U3MiIsInN1YiI6IjY1NGIzYjNiMjg2NmZhMDBmZTAxNzNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eyrBSq1n6-zAMkPkgpWhL7ZF_xN7rGMsDt8YFQlK0DI",
  },
};

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());

export const topRated = () =>
  fetch(topRatedUrl, options).then((res) => res.json());

export const upComing = () =>
  fetch(upcomingUrl, options).then((res) => res.json());

export const genreList = () =>
  fetch(genreListUrl, options).then((res) => res.json());

export const dayTrendList = () =>
  fetch(dayTrendUrl, options).then((res) => res.json());

export const weekTrendList = () =>
  fetch(weekTrendUrl, options).then((res) => res.json());

export const movieDetail = (id) => {
  const detailUrl = baseurl + `movie/${id}?language=ko-KR`;
  return fetch(detailUrl, options).then((res) => res.json());
};

export const movieSearch = (keyword) => {
  const searchUrl = baseurl + `search/movie?query=${keyword}&language=ko-KR`;
  return fetch(searchUrl, options).then((res) => res.json());
};
