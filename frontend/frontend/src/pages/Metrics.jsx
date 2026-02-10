import { useEffect, useState } from "react";
import api from "../api/api";

export default function Metrics({ onBack }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const load = async () => {
    setError("");
    try {
      const res = await api.get("/metrics");
      setData(res.data);
    } catch (e) {
      setError("Could not load metrics. Is the backend running?");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const counts = data?.moodAfterCounts || {};
  const total = data?.totalReflections || 0;
  const better = (counts["🙂"] || 0) + (counts["😄"] || 0);
  const betterPct = total ? Math.round((better / total) * 100) : 0;

  return (
    <div>
      <h3>Impact Dashboard</h3>

      {error && <div className="error">{error}</div>}
      {!data && !error && <p>Loading metrics…</p>}

      {data && (
  <div className="card">
    <p><b>Total reflections:</b> {total}</p>
    <p><b>% feeling better:</b> {betterPct}%</p>

    <div style={{ marginTop: 12 }}>
      <p style={{ marginBottom: 6 }}><b>Mood after activity</b></p>
      <ul style={{ marginTop: 0 }}>
        <li>😣 Worse: {counts["😣"] || 0}</li>
        <li>😐 Same: {counts["😐"] || 0}</li>
        <li>🙂 A bit better: {counts["🙂"] || 0}</li>
        <li>😄 Much better: {counts["😄"] || 0}</li>
      </ul>
    </div>

    <div className="btnRow">
      <button className="btn btnPrimary" onClick={load}>Refresh</button>
      <button className="btn" onClick={onBack}>← Back</button>
    </div>

    <p className="subtle" style={{ marginTop: 12 }}>
      Dashboard updates live from /metrics for demo transparency.
    </p>
  </div>
)}

      <p style={{ marginTop: 12, fontSize: 12, color: "#666" }}>
        We aggregate anonymised reflection feedback to measure wellbeing uplift without diagnosing users.
      </p>
    </div>
  );
}