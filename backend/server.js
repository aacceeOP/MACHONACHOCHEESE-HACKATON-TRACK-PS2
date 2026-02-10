const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/activities", (req, res) => {
  const { energy, social } = req.query;

  const all = [
    { id: 1, title: "Quiet Park Walk", description: "A calm 10-minute walk with 1–2 others", energy: "low", social: "small" },
    { id: 2, title: "Cafe Sit-In", description: "Sit quietly with a warm drink", energy: "low", social: "solo" },
    { id: 3, title: "Guided Stretch Break", description: "5-minute stretch video at your desk", energy: "low", social: "solo" },
    { id: 4, title: "Boardgame Corner", description: "A light game session with 2–3 others", energy: "medium", social: "small" },
    { id: 5, title: "Community Walk Meetup", description: "A casual walk with a group", energy: "medium", social: "public" },
    { id: 6, title: "Creative Doodle Break", description: "Draw/sketch for 10 minutes (solo)", energy: "medium", social: "solo" },
    { id: 7, title: "Badminton Social", description: "Join a casual sports session", energy: "high", social: "public" }
  ];

  const filtered = all.filter(a =>
    (!energy || a.energy === energy) &&
    (!social || a.social === social)
  );

const withReason = filtered.map(a => {
  let reason = "A low-pressure option to help you reset.";

  if (energy === "low" && a.social === "solo") reason = "Matches low energy + solo comfort — minimal effort, calming.";
  if (energy === "low" && a.social === "small") reason = "Low energy friendly, with gentle connection (2–4 people).";
  if (energy === "medium" && a.social === "small") reason = "A light social option that doesn’t require big commitment.";
  if (energy === "high") reason = "You indicated higher energy — this uses it in a positive, grounding way.";

  const safety = "If this feels too much, choose a smaller step — your pace matters.";

  return { ...a, reason, safety };
});

  res.json(withReason);
});

// In-memory storage for hackathon demo (resets when server restarts)
const feedbackLog = [];

app.post("/feedback", (req, res) => {
  const { activityId, moodBefore, moodAfter, energy, social } = req.body;

  if (!activityId || !moodAfter) {
    return res.status(400).json({ error: "Missing activityId or moodAfter" });
  }

  feedbackLog.push({
    activityId,
    moodBefore: moodBefore || null,
    moodAfter,
    energy: energy || null,
    social: social || null,
    ts: Date.now()
  });

  res.json({ ok: true });
});

app.get("/metrics", (req, res) => {
  const total = feedbackLog.length;

  const moodCounts = feedbackLog.reduce((acc, x) => {
    acc[x.moodAfter] = (acc[x.moodAfter] || 0) + 1;
    return acc;
  }, {});

  res.json({
    totalReflections: total,
    moodAfterCounts: moodCounts
  });
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});