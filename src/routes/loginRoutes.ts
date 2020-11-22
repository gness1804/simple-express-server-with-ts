import { Request, Response, Router } from 'express';
import requireAuth from '../middleware/requireAuth';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.redirect('/auth');
});

router.get('/login', (req: Request, res: Response) => {
  res.redirect('/auth/login');
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = { ...req.session, loggedIn: false, email: undefined };
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route!');
});

export { router };
