# MACHONACHOCHEESE|HACKATON TR$ACHL | PS2 #

## Wellbeing swipe 

#### Wellbeing swipe is a loq-pressure wellbeing web application designed to help users take small emotionally safe steps when they feel low energy, socially drained, or overwhelmed.  
#### instead of forcing deep reflection or conversation, the app uses a **swipe-based interface** to gently suggest activities matched to a user's current energy and social comfort level. 

## Some Key Features:
#### **Energy based check ins** ( No clinical labels )
Swipe to choose or skip activities with **zero pressure**
**low erffort micro activities** ( solo and social ) 
**Optional reflection** after action 
Anonymous impact metrics dashboard
Privacy first design

## How the app works
#### 1) Check ins
##### users indicate their energy levels and social comfort levels. Thisi avoids emotional labelling and reduces cognitive load
#### 2) Swipe activities 
#### Users are shown activities that match their check-ins. They can swipe right on activities that they are interested in and left on those that they are not interested in 
### 3) Reflection (optional) 
#### After completing an ativity, users can reflect briefly on how they feel. There are options for worse, same, a little bit better and much better
### 4) Impact metrics
#### Reflections are stored anonymously and displayed as total reflections, % feeling better and moos distribution. 

## Things we have used
### Fronend
#### 1) React (vite)
2) Framer Motion (animations)
3) CSS (custom)

###Backend
#### 1) Node.js
2) Express
3) In memory data store (demo-friendly)


## Project Structure
#### 
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
│   └── package.json
│
├── backend/
│   ├── index.js
│   └── package.json
│
└── README.md


