# MACHONACHOCHEESE|HACKATON TR$ACHL | PS2 #
# Wellbeing Swipe
Low-pressure wellbeing web app  
Hackathon Track: Problem Statement 2

---

## 🌱 Overview

Wellbeing Swipe is a low-pressure wellbeing web application designed to help users take small, emotionally safe steps when they feel low energy, socially drained, or overwhelmed.

Instead of forcing deep reflection or conversation, the app uses a swipe-based interface to gently suggest micro-activities matched to a user’s current energy and social comfort level.

---

## 💡 Why We Built This

Many wellbeing apps:
- Require emotional labelling
- Demand long reflections
- Create pressure to “feel better”

Our approach is different:
- No clinical labels  
- No forced sharing  
- No pressure to act or improve  

Users stay in control at every step.

---

## ⚙️ How the App Works

### 1️⃣ Energy-based Check-in  
Users indicate:
- Energy level  
- Social comfort level  

This avoids emotional labelling and reduces cognitive load.

---

### 2️⃣ Swipe Activities  
Users are shown activities matched to their check-in.

- 👉 Swipe right: interested  
- 👈 Swipe left: skip  

No penalties, no explanations needed.

---

### 3️⃣ Reflection (Optional)  
After completing an activity, users can briefly reflect on how they feel:
- Worse
- Same
- A bit better
- Much better  

Reflection is optional and lightweight.

---

### 4️⃣ Impact Metrics  
Anonymous reflections are aggregated and displayed as:
- Total reflections
- % feeling better
- Mood distribution  

No personal data is stored.

---

## 🛠️ Technologies Used

### Frontend
- React (Vite)
- Framer Motion (animations)
- Custom CSS

### Backend
- Node.js
- Express
- In-memory data store (demo-friendly)

---

## 📁 Project Structure

```text
wellbeing-swipe-app/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── MoodCheck.jsx
│   │   │   ├── SwipeDeck.jsx
│   │   │   ├── Reflection.jsx
│   │   │   └── Metrics.jsx
│   │   ├── components/
│   │   │   └── SwipeCard.jsx
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── index.js
│   └── package.json
│
└── README.md
│
└── README.md


