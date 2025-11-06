const express = require("express");
const path = require("path");
// const sql = require("mssql");
// const dotenv = require("dotenv");

// dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/views", express.static(path.join(__dirname, "views")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log("Server running on port " + port);
});

app.get("/", (req, res) => {
    res.render("./index", { money: 20.05 });
});

// process.on("SIGINT", async () => {
//     console.log("Server is gracefully shutting down");
//     await sql.close();
//     console.log("Database connections closed");
//     process.exit(0);
// });
