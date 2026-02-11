# MACHONACHOCHEESE|HACKATON TRACK|PS2 #
# Flow Together
Low-pressure wellbeing web app  
Hackathon Track: Problem Statement 2

---

## Overview

Flow Together is a low pressure wellbeing web application designed to help users take small, emotionally safe steps when they feel low energy, socially drained, or overwhelmed.

Instead of forcing deep reflection or conversation, the app uses a swipe based interface to gently suggest micro activities matched to a user’s current energy and social comfort level.

---

## Why We Built This

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

## How the App Works

### 1) Energy based Check ins  
Users indicate:
- Energy level  
- Social comfort level  

This avoids emotional labelling and reduces cognitive load.

---

### 2) Swipe Activities  
Users are shown activities matched to their check-in.

- Swipe right: interested  
- Swipe left: skip  

No penalties, no explanations needed.

---

### 3) Reflection (Optional)  
After completing an activity, users can briefly reflect on how they feel:
- Worse
- Same
- A bit better
- Much better  

Reflection is optional and lightweight.

---

### 4) Impact Metrics  
Anonymous reflections are aggregated and displayed as:
- Total reflections
- % feeling better
- Mood distribution  

No personal data is stored.

---

## Technologies Used

### Frontend
- React (Vite)
- Framer Motion (animations)
- Custom CSS

### Backend
- Node.js
- Express
- In-memory data store (demo-friendly)

---

## Project Structure

```
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
````
---


## Setup Instructions
### 1) Clone the Repository
````
git clone https://github.com/your-username/wellbeing-swipe.git
cd wellbeing-swipe

````

---

### 2) Backend Setup

````
cd backend
npm install
npm run dev
````

#### The backend will run on 
````
http://localhost:3001
````
--- 

### 3) Frontend Setup 

````
cd frontend
npm install
npm run dev
````

#### The frontend will run on 
````
http://localhost:5174
````

---


### Usage Instructions 
- open the frontend in your browser
- complete the energy and social check in
- swipe through activity suggestions
- choose one to relfect on
- view aggregated impact metrics

--- 

### Privacy and Ethics
- No user accounts
- No personal data stored
- Reflections are anonymised and aggregared
- Designed to **support**, not diagnose

--- 

### Sustainability and scalability
- can integrate a database for long term storage
- activities can be dynamically generated with AI
- Metrics can inform community wellbeing trends
- suitable for schools, workplaces or community programs

---


### Side notes
- backend must be running for metrics to update
- metrics reset when server restarts
- app is minimal to reduce load










