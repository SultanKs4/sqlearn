import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

function CountdownTimer({ expiryTimestamp, setTimerLeft, ...props }) {
  const { seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    setTimerLeft(`${hours}:${minutes}:${seconds}`);
    window.localStorage.setItem(
      "timerLeft",
      JSON.stringify({
        hour: hours,
        minute: minutes,
        second: seconds,
      })
    );
  }, [seconds]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "1.2em" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{!isRunning && "Waktu habis"}</p>
    </div>
  );
}

export default CountdownTimer;
