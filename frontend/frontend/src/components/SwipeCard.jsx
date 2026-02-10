import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SwipeCard({ activity, onSwipe }) {
  const x = useMotionValue(0);

  // tilt slightly as user drags
  const rotate = useTransform(x, [-200, 200], [-8, 8]);

  // fade overlays based on drag distance
  const yesOpacity = useTransform(x, [40, 160], [0, 1]);
  const noOpacity = useTransform(x, [-160, -40], [1, 0]);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate }}
      onDragEnd={(e, info) => {
        if (info.offset.x > 150) onSwipe("right", activity);
        else if (info.offset.x < -150) onSwipe("left", activity);
      }}
      className="card"
    >
      {/* YES/NOPE overlays */}
      <motion.div className="stamp stampYes" style={{ opacity: yesOpacity }}>
        YES
      </motion.div>
      <motion.div className="stamp stampNo" style={{ opacity: noOpacity }}>
        NOPE
      </motion.div>

      <h3 style={{ marginTop: 0 }}>{activity.title}</h3>
      <p style={{ color: "#555" }}>{activity.description}</p>

      {activity.reason && (
        <p style={{ marginTop: 10, fontSize: 13, color: "#444" }}>
          <b>Why this?</b> {activity.reason}
        </p>
      )}

      {activity.safety && (
        <p style={{ marginTop: 8, fontSize: 12, color: "#777" }}>
          {activity.safety}
        </p>
      )}

      <div className="kv">
        <span className="tag">Energy: {activity.energy}</span>
        <span className="tag">Social: {activity.social}</span>
      </div>

      <p className="subtle" style={{ marginTop: 12 }}>
        Swipe right = Yes • Swipe left = No
      </p>
    </motion.div>
  );
}