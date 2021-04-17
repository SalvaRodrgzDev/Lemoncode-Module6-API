import { Router } from 'express';
import {
  getCharacterList,
  getCharacter,
  updateCharacter,
  insertCharacter,
  deleteCharacter,
  Character,
} from '../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.send(characters);
  })
  .delete('/:id', async (req, res) => {
    const id = req.params.id;
    const success = await deleteCharacter(id);
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const character = await getCharacter(id);
    res.send(character);
  })
  .post('/', async (req, res) => {
    const characterEdit: Character = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: Character = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
