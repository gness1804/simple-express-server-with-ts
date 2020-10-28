import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>My Site</h1>
    </div>
  `)
});

app.listen(3000, () => {
  console.info('Listening on port 3000.')
})
