import { Request, Response } from 'express';
import { get, post, controller, validateBody } from './decorators';

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
    if (req.session?.loggedIn) {
      res.send(`
      <div>
        <p>Congrats! You are logged in as ${req.session.email}.</p>
        <a href="/logout">Log out</a>
      </div>
    `);
      return;
    }

    res.send(`
      <div>
        <p>You are not logged in. Please log in now.</p>
        <a href="/login">Log in</a>
      </div>
    `);
  }

  @post('/login')
  @validateBody('email', 'password')
  attemptLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === 'mickey@mouse.com' && password === '1234') {
      req.session = { loggedIn: true, email };
      res.redirect('/');
    } else {
      res.send('Incorrect email or password. Please try again.');
    }
  }
}
