/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import diaryService from '../service/diaryService';
import toNewDiaryEntry from '../utils'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
    const diary = diaryService.findById(Number(req.params.id))

    if(diary){
        res.send(diary)
    } else {
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    // use "toNewDiaryEntry" to have certainty that req.body & returned obj have proper types
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)
        const addedEntry = diaryService.addDiary(newDiaryEntry)
        res.json(addedEntry)
    } catch (err) {
        res.status(400).send(err)
    }
});


export default router;