import express from "express";
import cors from "cors";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* =========================
   🛠 FIX __dirname (ES MODULE)
========================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   🛠 MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   🌐 SERVE FRONTEND FILES
========================= */

/* =========================
   🧠 OPENAI SETUP
========================= */
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

/* =========================
   🧠 AI SOLVER ROUTE (FIXED)
========================= */
app.post("/solve", async (req, res) => {
    const { problem } = req.body;

    // 🔍 DEBUG LOG
    console.log("📥 Problem received:", problem);

    if (!problem || problem.trim() === "") {
        return res.status(400).json({ error: "No problem provided" });
    }

    try {
        const response = await client.responses.create({
            model: "gpt-4.1-mini",
            input: [
                {
                    role: "system",
                    content: `You are a math teacher. Solve step-by-step like teaching a beginner.

Rules:
- Be simple and clear
- Use plain text only
- No markdown or symbols

Format:
Step 1: ...
Step 2: ...
Final Answer: ...`
                },
                {
                    role: "user",
                    content: problem
                }
            ]
        });

        const answer = response.output_text;

        console.log("✅ AI Response:", answer);

        res.json({
            answer: answer || "No answer generated"
        });

    } catch (error) {
        console.error("❌ AI ERROR:", error.message);

        res.status(500).json({
            error: "AI error",
            details: error.message
        });
    }
});

/* =========================
   🌐 DEFAULT ROUTE
========================= */
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/* =========================
   🚀 START SERVER
========================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🔥 Server running at http://localhost:${PORT}`);
});