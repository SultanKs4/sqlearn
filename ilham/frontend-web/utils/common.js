import moment from "moment";

export const ucfirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const countTimeDifference = (startDate = moment(), endDate) => {
  let duration = moment.duration(endDate.diff(startDate));

  if (duration.asHours() < 0)
    return `Terlewat ${Math.abs(parseInt(duration.asHours()))} jam`;

  return duration.asDays() < 1
    ? `${parseInt(duration.asHours())} jam lagi`
    : `${parseInt(duration.asDays())} hari lagi`;
};

export const getHours = (minutes) => minutes / 60;

export const isObjectEmpty = (obj) => Object.entries(obj).length === 0;

//remove html tags from a string, leaving only the inner text
export const removeHTML = (str) => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = str;
  return tmp.textContent || tmp.innerText || "";
};

export const formatToArray = (stringArray) => JSON.parse(stringArray);
