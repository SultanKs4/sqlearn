import { createContext, useContext, useState } from "react";

// Create Context object.
export const JadwalContext = createContext({
  timer: "",
  addTimer: () => {},
});

export const JadwalProvider = (props) => {
  const [timer, setTimer] = useState({
    text: "",
    format: {
      hour: 0,
      minute: 0,
      second: 0,
    },
  });

  const addTimer = (timerObj) => setTimer(timerObj);

  const contextValue = { timer, addTimer };

  return (
    <JadwalContext.Provider value={contextValue}>
      {props.children}
    </JadwalContext.Provider>
  );
};
