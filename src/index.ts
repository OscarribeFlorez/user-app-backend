import express from 'express';

import { hello } from '@/routes/index.route';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: hello });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
