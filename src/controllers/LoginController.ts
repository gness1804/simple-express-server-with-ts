import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/auth')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
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
  }

  @get('/')
  showDefaultView(req: Request, res: Response): void {
    if (req.session?.loggedIn)
      res.send(`
      <div>
        <p>Congrats! You are logged in as ${req.session.email}.</p>
        <a href="/logout">Log out</a>
      </div>
    `);

    res.send(`
      <div>
        <p>You are not logged in. Please log in now.</p>
        <a href="/login">Log in</a>
      </div>
    `);
  }
}
