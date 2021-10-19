"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bmiCalculator_1 = __importDefault(require("./bmiCalculator"));
const calculator_1 = __importDefault(require("./calculator"));
const app = (0, express_1.default)();
app.get("/ping", (_req, res) => {
    res.send("pong");
});
app.get("/hello", (_req, res) => {
    res.send("Hello Full Stack!");
});
// http://localhost:3003/bmi?height=180&weight=72
app.get("/bmi", (req, res) => {
    const { height, weight } = req.query;
    let indicator = (0, bmiCalculator_1.default)(parseInt(height), parseInt(weight));
    let json = JSON.stringify({
        weight: parseInt(weight),
        height: parseInt(height),
        bmi: indicator,
    });
    res.send(json);
    if (!req.query.height || !req.query.weight) {
        res.json({ error: "malformatted parameters" });
    }
});
app.post('/calculate', (req, res) => {
    const { value1, value2, op } = req.body;
    const result = (0, calculator_1.default)(value1, value2, op);
    res.send(result);
});
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
