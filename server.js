import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 مهم جدًا
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

// API test
app.get("/api", (req, res) => {
  res.send("API is running");
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "fares.sayeh.20.12@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p>${name}</p>
        <p>${email}</p>
        <p>${message}</p>
      `
    });

    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running");
});