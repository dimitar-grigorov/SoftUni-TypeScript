"use strict";
// cd "$(git rev-parse --show-toplevel)/03-Generics/Demo"
// tsc && node dist/app-fetch.js
const USERS_URL = "https://jsonplaceholder.typicode.com/posts";
function getUsers() {
    fetch(USERS_URL, { method: "GET" })
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        const postTiles = data.map((post) => {
            return post.title;
        });
        console.log({ postTiles });
    })
        .catch((err) => console.log(`Error: ${err}`));
}
getUsers();
