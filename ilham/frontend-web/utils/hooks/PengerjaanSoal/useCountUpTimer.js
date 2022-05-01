import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

function useCountUpTimer() {
  const [timerUp, setTImerUp] = useState("");

  const { seconds, minutes, hours, isRunning } = useStopwatch({
    autoStart: true,
  });

  useEffect(() => {
    setTImerUp(
      `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`
    );
  }, [seconds]);

  return [timerUp];
}

export default useCountUpTimer;
