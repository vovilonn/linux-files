import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use("/file", express.static("/"), (req, res) => res.sendStatus(404));

app.listen(3200, "0.0.0.0", () => console.log("Successfully started"));
