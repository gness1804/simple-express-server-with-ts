import { Request, Response, Router } from 'express';

interface ModifiedRequest extends Request {
  body: { [key: string]: string | undefined };
}

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

router.post('/login', (req: ModifiedRequest, res: Response) => {
  const { email, password } = req.body;

  if (!email) return res.send('Error: please enter a valid email');

  if (!password) return res.send('Error: please enter a valid password');

  res.send(
    `Email: ${email.toUpperCase()}, Password: ${password.toUpperCase()}`,
  );
});

export { router };
