import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import indexRouter from '@/routes/index.route';
import { connectToMongoDB } from '@/config/mongodb.config';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set('port', port);

// middlewares
app.use(bodyParser.json());

// routes
app.use('/', indexRouter);

// server listening
app.listen(app.get('port'), () => {
  console.log('Server is running on port', app.get('port'));
});

// connect to mongodb
connectToMongoDB();
