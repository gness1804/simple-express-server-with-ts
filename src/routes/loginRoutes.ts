import { Request, Response, Router } from 'express';
import requireAuth from '../middleware/requireAuth';

interface ModifiedRequest extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn)
    return res.send(`
    <div>
      <p>Congrats! You are logged in as ${req.session.email}.</p>
      <a href="/logout">Log out</a>
    </div>
  `);

  return res.send(`
    <div>
      <p>You are not logged in. Please log in now.</p>
      <a href="/login">Log in</a>
    </div>
  `);
});

router.get('/login', (req: Request, res: Response) => {
  res.redirect('/auth/login');
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = { ...req.session, loggedIn: false, email: undefined };
  res.redirect('/');
});

router.post('/login', (req: ModifiedRequest, res: Response) => {
  const { email, password } = req.body;

  if (!email) return res.send('Error: please enter a valid email');

  if (!password) return res.send('Error: please enter a valid password');

  if (email === 'mickey@mouse.com' && password === '1234') {
    req.session = { loggedIn: true, email };
    res.redirect('/');
  } else {
    res.send('Incorrect email or password. Please try again.');
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route!');
});

export { router };
