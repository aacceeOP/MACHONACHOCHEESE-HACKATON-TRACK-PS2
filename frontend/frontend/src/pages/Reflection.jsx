import { useState } from "react";
import api from "../api/api";

export default function Reflection({ activity, onRestart, userState }) {
  const [moodAfter, setMoodAfter] = useState("🙂");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const submit = async () => {
    setSaving(true);
    try {
      await api.post("/feedback", {
        activityId: activity?.id,
        moodAfter,
        energy: userState?.energy,
        social: userState?.social
      });
      setSaved(true);
    } catch (e) {
      alert("Could not save reflection. Is backend running?");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h3>Nice choice.</h3>
      <p><b>{activity?.title}</b></p>
      <p style={{ color: "#555" }}>{activity?.description}</p>

      <hr className="hr" />

<p style={{ marginBottom: 8 }}>
  <b>Quick reflection:</b> how do you feel right now?
</p>

<select
  value={moodAfter}
  onChange={(e) => setMoodAfter(e.target.value)}
  style={{
    width: "100%",
    padding: 10,
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.12)"
  }}
>
  <option value="😣">😣 Worse</option>
  <option value="😐">😐 Same</option>
  <option value="🙂">🙂 A bit better</option>
  <option value="😄">😄 Much better</option>
</select>

<div className="btnRow">
  <button
    className="btn btnPrimary"
    onClick={submit}
    disabled={saving || saved}
  >
    {saved ? "Saved ✅" : saving ? "Saving..." : "Save reflection"}
  </button>

  <button className="btn" onClick={onRestart}>
    Start again
  </button>
</div>

<p className="subtle" style={{ marginTop: 12 }}>
  We aggregate anonymised reflections to measure wellbeing uplift (no diagnosis).
</p>

      <p style={{ marginTop: 12, fontSize: 12, color: "#666" }}>
        This reflection loop creates measurable wellbeing impact data (without diagnosing users).
      </p>
    </div>
  );
}