// handling data munipulation in this ts-file of service folder
import diaries from '../../data/diaryentries';
// to type the imported json
import { NonSensitiveDiaryEntry, DiaryEntry, NewDiaryEntry } from '../types';

// type assertion when quite certain about the variable type and what is been doing here
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

// Pick type allows to choose which fields of exisint type would be chosen
// Omit type allows to exclude field
// Or declear a complete new type for it
// Because typescript not modify the actual data but only its type, fields-excluding shall be done manually
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => ({
        id, date, weather, visibility
    }));
}

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...entry
    }
    diaries.push(newDiaryEntry)
    return newDiaryEntry;
};

// return undefined if obj not found
const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id===id)
    return entry
}

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById
};
