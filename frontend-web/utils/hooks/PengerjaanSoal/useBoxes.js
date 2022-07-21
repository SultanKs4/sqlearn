import { useState, useEffect } from "react";

const useBoxes = (isDataPertanyaanLoaded, dataPertanyaan) => {
  const [boxes, setBoxes] = useState([]);

  const setupBoxes = () => {
    // Ini assign boxes ketika pertanyaan di load
    let createBoxes = {
      sql_parts: {
        items: JSON.parse(dataPertanyaan?.sql_parts)?.filter(
          (item) => item !== "__"
        ),
      },
      sql_clues: { items: JSON.parse(dataPertanyaan?.sql_hints) },
      sql_constructed: {
        items: JSON.parse(dataPertanyaan?.sql_hints),
      },
    };

    setBoxes(createBoxes);
  };

  const resetBox = () => {
    setupBoxes();
  };

  useEffect(() => {
    if (isDataPertanyaanLoaded && dataPertanyaan !== undefined) setupBoxes();
  }, [isDataPertanyaanLoaded, dataPertanyaan]);

  return [boxes, setBoxes, resetBox];
};

export default useBoxes;
