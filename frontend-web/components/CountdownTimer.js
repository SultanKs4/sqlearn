import React, { useCallback, useEffect } from "react";
import { useTimer } from "react-timer-hook";

function CountdownTimer({ expiryTimestamp, setTimerLeft, ...props }) {
  const { seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const updateTimer = useCallback(() => {
    setTimerLeft(
      `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`
    );

    window.localStorage.setItem(
      "timerLeft",
      JSON.stringify({
        hour: hours,
        minute: minutes,
        second: seconds,
      })
    );
  }, [seconds]);

  useEffect(() => {
    updateTimer();
  }, [updateTimer]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "1.2em" }}>
        <span>
          {" "}
          {`${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
          }:${seconds < 10 ? `0${seconds}` : seconds}`}
        </span>
      </div>
      <p>{!isRunning && "Waktu habis"}</p>
    </div>
  );
}

export default CountdownTimer;
