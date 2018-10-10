import express from 'express';

import dotenv from 'dotenv';
import 'babel-polyfill';
import ReflectionWithJsObject from '../../usingJSObject/controllers/Reflection';
import ReflectionWithDB from '../controllers/Reflection';

dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;

// Express router
const router = express.Router();

router.post('/reflections', Reflection.create);
router.get('/reflections', Reflection.getAll);
router.get('/reflections/:id', Reflection.getOne);
router.put('/reflections/:id', Reflection.update);
router.delete('/reflections/:id', Reflection.delete);


export default router;
