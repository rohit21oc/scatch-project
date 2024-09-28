const cookieParser = require("cookie-parser"); // Correct import
const express = require("express");
const app = express();
const path = require("path");
const usersRouter = require("./routes/usersRouter")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const db = require("./config/mongoose.connection"); // Assuming this connects to your MongoDB

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(3000, () => {
    console.log("App listening on port 3000");
});
