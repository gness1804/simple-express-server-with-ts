"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    res.send("\n    <div>\n      <h1>My Site</h1>\n    </div>\n  ");
});
router.get('/login', function (req, res) {
    res.send("\n        <form method=\"POST\">\n            <div>\n                <label>Email</label>\n                <input type=\"email\" name=\"email\">\n            </div>\n            <div>\n                <label>Password</label>\n                <input type=\"password\" name=\"password\">\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n    ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email)
        return res.send('Error: please enter a valid email');
    if (!password)
        return res.send('Error: please enter a valid password');
    res.send("Email: " + email.toUpperCase() + ", Password: " + password.toUpperCase());
});
