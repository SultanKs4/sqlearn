export const ucfirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const getHours = (number) => number / 60;

export const isObjectEmpty = (obj) => Object.entries(obj).length === 0;
