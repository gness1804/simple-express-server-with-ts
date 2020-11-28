import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send(`
    <div>
      <h1>User Not Authorized.</h1>
      <a href="/">Home</a>
    </div>
  `);
};

@controller('')
export class RootController {
  @get('/')
  // called "getRoot" in original course
  showDefaultView(req: Request, res: Response): void {
    if (req.session?.loggedIn) {
      res.send(`
      <div>
        <p>Congrats! You are logged in as ${req.session.email}.</p>
        <a href="/auth/logout">Log out</a>
      </div>
    `);
      return;
    }

    res.send(`
      <div>
        <p>You are not logged in. Please log in now.</p>
        <a href="/auth/login">Log in</a>
      </div>
    `);
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome to the protected route!');
  }
}
