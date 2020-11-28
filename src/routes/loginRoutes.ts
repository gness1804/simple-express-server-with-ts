import { Request, Response, Router } from 'express';
import requireAuth from '../middleware/requireAuth';

const router = Router();

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route!');
});

export { router };
