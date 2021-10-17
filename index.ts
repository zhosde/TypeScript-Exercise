import express from "express";
import bmiCalculator from "./bmiCalculator";

const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

// http://localhost:3003/bmi?height=180&weight=72
app.get("/bmi", (req, res) => {
  const { height, weight } = req.query as { [key: string]: string };
    let indicator = bmiCalculator(parseInt(height), parseInt(weight));
    let json = JSON.stringify({
      weight: parseInt(weight),
      height: parseInt(height),
      bmi: indicator,
    })
    res.send(json)
  if (!req.query.height || !req.query.weight) {
    res.json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
