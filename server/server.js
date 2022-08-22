const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const userRoute = require("./routes/api/users");
const authRoute = require("./routes/api/auth");
const profileRoute = require("./routes/api/profile");
const postRoute = require("./routes/api/posts");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: false }));
app.get("/api", (req, res) => res.send("Api running"));

// define routes

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

connectDB();
