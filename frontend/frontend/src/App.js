import { useState } from "react";
import MoodCheck from "./pages/MoodCheck";
import SwipeDeck from "./pages/SwipeDeck";
import Reflection from "./pages/Reflection";

export default function App() {
  const [step, setStep] = useState("mood"); // mood -> swipe -> reflect
  const [userState, setUserState] = useState(null);
  const [lastChosen, setLastChosen] = useState(null);

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: 16, fontFamily: "system-ui" }}>
      <h2 style={{ marginBottom: 12 }}>Wellbeing Swipe</h2>

      {step === "mood" && (
        <MoodCheck
          onContinue={(state) => {
            setUserState(state);
            setStep("swipe");
          }}
        />
      )}

      {step === "swipe" && (
        <SwipeDeck
          userState={userState}
          onChosen={(activity) => {
            setLastChosen(activity);
            setStep("reflect");
          }}
        />
      )}

      {step === "reflect" && (
        <Reflection
          activity={lastChosen}
          onRestart={() => {
            setUserState(null);
            setLastChosen(null);
            setStep("mood");
          }}
        />
      )}
    </div>
  );
}