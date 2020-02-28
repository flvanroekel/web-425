/*
=======================================
  ; Title: app.js
  ; Author: Richard Krasso
  ; Date: August 30 2019
  ; Modified By: Faye Van Roekel
  ; Description: app.js
========================================
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var composers = [
    { id: 1, firstName: "Johann", lastName: "Bach" },
    { id: 2, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 3, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 5, firstName: "Frederic", lastName: "Chopin" },
];
function getComposers() {
    return composers;
}
app.get('/', function (request, response) {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});
app.get('/api/composers', function (request, response) {
    response.json(getComposers());
});
function getComposerById(composerId) {
    return composers.find(function (c) { return c.id == composerId; });
}
app.get('/api/composer/:id', function (request, response) {
    response.json(getComposerById(request.params.id));
});
var server = app.listen(3000, "localhost", function () {
    console.log("Listening on port 3000");
});