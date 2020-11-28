import { Request, Response } from 'express';
import { get, controller } from './decorators';

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
}
