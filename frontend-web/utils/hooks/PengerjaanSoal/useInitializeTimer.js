import { useContext, useEffect, useState } from "react";
import { JadwalContext } from "../../context/JadwalContext";

const useInitializeTimer = (isDataPertanyaanLoaded, dataPertanyaan) => {
  const { timer } = useContext(JadwalContext);
  const [isTimeLoaded, setIsTimeLoaded] = useState(false);
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [timerLeftCounter, setTimerLeftCounter] = useState("");

  useEffect(() => {
    // ? Biar timernya tetap berjalan dan tidak reset ketika direset
    if (isDataPertanyaanLoaded && dataPertanyaan !== undefined) {
      const backupTimer = JSON.parse(window?.localStorage.getItem("timerLeft"));
      const currentTime = new Date();
      const { hour, minute, second } = timer?.format;

      setScheduleDate(
        currentTime.setHours(
          currentTime.getHours() + hour,
          currentTime.getMinutes() + minute,
          currentTime.getSeconds() + second
        )
      );

      if (hour === 0 && minute === 0 && second === 0) {
        setScheduleDate(
          currentTime.setHours(
            currentTime.getHours() + backupTimer.hour,
            currentTime.getMinutes() + backupTimer.minute,
            currentTime.getSeconds() + backupTimer.second
          )
        );
      }
      setIsTimeLoaded(true);
    }
  }, [isDataPertanyaanLoaded, dataPertanyaan]);

  return [isTimeLoaded, scheduleDate, timerLeftCounter, setTimerLeftCounter];
};

export default useInitializeTimer;
