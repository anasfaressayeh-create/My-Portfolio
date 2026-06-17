import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

// Check env
if (!process.env.RESEND_API_KEY) {
  console.warn("⚠️ Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact API
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
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.status(200).json({ success: true, result });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(express.static(".")):
