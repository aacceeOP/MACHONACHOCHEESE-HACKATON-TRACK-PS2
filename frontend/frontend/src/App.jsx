import { useState } from "react";
import Metrics from "./pages/Metrics";
import MoodCheck from "./pages/MoodCheck";
import SwipeDeck from "./pages/SwipeDeck";
import Reflection from "./pages/Reflection";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [step, setStep] = useState("mood"); // mood -> swipe -> reflect
  const [userState, setUserState] = useState(null);
  const [chosen, setChosen] = useState(null);

  return (
  <div className="container">
    <div className="appShell">
      <div className="topbar">
        <div className="brand">
          <h2 className="title">Wellbeing Swipe</h2>
          <span className="badge">low-pressure</span>
        </div>

        <button className="btn btnPrimary" onClick={() => setStep("metrics")}>
          Metrics
        </button>
      </div>

      <p className="subtle">
        Tiny steps that match your energy — swipe to choose, then reflect.
      </p>

      <AnimatePresence mode="wait">
        {step === "mood" && (
          <motion.div
            key="mood"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <MoodCheck
              onContinue={(state) => {
                setUserState(state);
                setStep("swipe");
              }}
            />
          </motion.div>
        )}

        {step === "swipe" && (
          <motion.div
            key="swipe"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <SwipeDeck
              userState={userState}
              onChosen={(activity) => {
                setChosen(activity);
                setStep("reflect");
              }}
            />
          </motion.div>
        )}

        {step === "reflect" && (
          <motion.div
            key="reflect"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <Reflection
              activity={chosen}
              userState={userState}
              onRestart={() => {
                setUserState(null);
                setChosen(null);
                setStep("mood");
              }}
            />
          </motion.div>
        )}

        {step === "metrics" && (
          <motion.div
            key="metrics"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <Metrics onBack={() => setStep("mood")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);
}
