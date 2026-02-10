import { useEffect, useState } from "react";
import api from "../api/api";
import SwipeCard from "../components/SwipeCard";

export default function SwipeDeck({ userState, onChosen }) {
  const [activities, setActivities] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    api.get("/activities", { params: userState })
      .then((res) => {
        setActivities(res.data);
        setIndex(0);
      })
      .catch(() => {
        setError("Could not load activities. Is the backend running on port 3001?");
      })
      .finally(() => setLoading(false));
  }, [userState]);

  const handleSwipe = (direction, activity) => {
    // Right swipe = choose and go to reflection
    if (direction === "right") {
      onChosen(activity);
      return;
    }

    // Left swipe = skip
    const next = index + 1;
    if (next >= activities.length) {
  setIndex(next); // move index past the end to trigger "done" UI
} else {
  setIndex(next);
}
  };

  if (loading) return <p>Finding activities that fit your energy today…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!activities.length) return <p>No activities found. Try different settings.</p>;

if (index >= activities.length) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>You’ve reached the end 🎉</h3>
      <p style={{ color: "#555" }}>
        Nice job taking small steps. Want more suggestions?
      </p>

      <div className="btnRow">
        <button className="btn btnPrimary" onClick={() => setIndex(0)}>
          Restart deck
        </button>
        <button className="btn" onClick={() => window.location.reload()}>
          Change check-in
        </button>
      </div>

      <p className="subtle" style={{ marginTop: 12 }}>
        Tip: If you’re low energy, try “solo” first — it’s the lowest pressure.
      </p>
    </div>
  );
}

const totalCount = activities.length;
const currentNum = Math.min(index + 1, totalCount);
const progress = totalCount ? Math.round((index / totalCount) * 100) : 0;

  return (
  <>
    <p style={{ color: "#666" }}>
      Showing activities for: <b>{userState.energy}</b> energy,{" "}
      <b>{userState.social}</b> social comfort
    </p>

    {/* 👇 STEP 6: PROGRESS BAR */}
    <div className="progressWrap">
      <div className="progressTop">
        <span className="subtle">
          Suggestion {currentNum} / {totalCount}
        </span>
        <span className="subtle">{progress}%</span>
      </div>

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

    <SwipeCard activity={activities[index]} onSwipe={handleSwipe} />

    <div className="btnRow">
      <button
        className="btn pillNo"
        onClick={() => handleSwipe("left", activities[index])}
      >
        ← No
      </button>

      <button
        className="btn pillYes"
        onClick={() => handleSwipe("right", activities[index])}
      >
        Yes →
      </button>
    </div>
  </>
);

}