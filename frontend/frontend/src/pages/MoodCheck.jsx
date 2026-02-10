import { useState } from "react";

export default function MoodCheck({ onContinue }) {
  const [energy, setEnergy] = useState("low");
  const [social, setSocial] = useState("solo");

  return (
    <div>
      <p style={{ marginBottom: 12 }}>
        Quick check-in (10 seconds). We’ll suggest activities that match your capacity today.
      </p>

      <div style={{ marginBottom: 12 }}>
        <label><b>Energy level</b></label><br />
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} style={{ width: "100%", padding: 8 }}>
          <option value="low">Low (tired / want calm)</option>
          <option value="medium">Medium (okay)</option>
          <option value="high">High (energetic)</option>
        </select>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label><b>Social comfort</b></label><br />
        <select value={social} onChange={(e) => setSocial(e.target.value)} style={{ width: "100%", padding: 8 }}>
          <option value="solo">Solo</option>
          <option value="small">Small group (2–4)</option>
          <option value="public">Public / bigger group</option>
        </select>
      </div>

      <button
        onClick={() => onContinue({ energy, social })}
        style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #ddd", cursor: "pointer" }}
      >
        Continue →
      </button>
    </div>
  );
}