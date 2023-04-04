import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();
app.use(express.json());

app.use("/reminder", remindersRouter);

app.get("/", (req, res) => {
  res.send("You are visiting the default route");
});

app.listen(8000, () => console.log("Server Connected Successfully"));
