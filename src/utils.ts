import { NewDiaryEntry, Weather, Visibility } from "./types";

// since unknown type does not allow any operations (incl accessing the fields)
// or to use type 'any' for the parameter and disalbe the corresponding lint rule
type Fields = { comment : unknown, date: unknown, weather: unknown, visibility: unknown };

// unknown type is the counterpart of "any", allows verify firstly and then confirm the type
const toNewDiaryEntry = ({ comment, date, weather, visibility } : Fields): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
      comment: parseComment(comment),
      date: parseDate(date),
      weather: parseWeather(weather),
      visibility: parseVisibility(visibility)
    };
  
    return newEntry;
  };

// to validate the comment field
// if true, return 'comment' to let compiler know it has the type of string
const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }
  return comment;
};

// a type guard function, to validate string
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any): param is Weather => {
    return Object.values(Weather).includes(param);
  };

const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather: " + weather);
  }
  return weather;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
    return Object.values(Visibility).includes(param);
  };
  
  const parseVisibility = (visibility: unknown): Visibility => {
    if (!visibility || !isVisibility(visibility)) {
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }
    return visibility;
  };

export default toNewDiaryEntry;
