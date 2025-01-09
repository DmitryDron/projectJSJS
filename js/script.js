"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [ ],
    privat: false
}

let firstMovieName = prompt("Один из последних просмотренных фильмов?");
let firstMovieReview = prompt("На сколько вы его оцените?")

let secondMovieName = prompt("Один из последних просмотренных фильмов?");
let secondMovieReview = prompt("На сколько вы его оцените?")

personalMovieDB.movies[firstMovieName] = firstMovieReview;
personalMovieDB.movies[secondMovieName] = secondMovieReview;