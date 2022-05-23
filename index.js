const express = require("express");
const app = express();

app.get("/", () => {
    console.log("Home page")
})

app.get("/testing", () => {
    console.log("Testing")
})

app.listen(3000, () => {
    console.log("Listening on porty 3000 !!")
})