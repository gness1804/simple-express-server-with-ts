import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>My Site</h1>
    </div>
  `);
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input type="email" name="email">
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password">
            </div>
            <button type="submit">Submit</button>
        </form> 
    `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(`Email: ${email}, Password: ${password}`);
});

export { router };
