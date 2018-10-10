// server.js
import express from 'express';

import reflectionRoute from './src/usingJSObject/routes/Reflection';

const app = express();

app.use(express.json());

app.use('/api/v1', reflectionRoute);

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Welcome To Reflection Corner' }));

app.listen(4039);
console.log('app running on port ', 4039);
