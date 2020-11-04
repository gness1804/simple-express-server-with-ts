"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn)
        return res.send("\n    <div>\n      <p>Congrats! You are logged in as " + req.session.email + ".</p>\n      <a href=\"/logout\">Log out</a>\n    </div>\n  ");
    return res.send("\n    <div>\n      <p>You are not logged in. Please log in now.</p>\n      <a href=\"/login\">Log in</a>\n    </div>\n  ");
});
router.get('/login', function (req, res) {
    res.send("\n        <form method=\"POST\">\n            <div>\n                <label>Email</label>\n                <input type=\"email\" name=\"email\">\n            </div>\n            <div>\n                <label>Password</label>\n                <input type=\"password\" name=\"password\">\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n    ");
});
router.get('/logout', function (req, res) {
    req.session = __assign(__assign({}, req.session), { loggedIn: false, email: undefined });
    res.redirect('/');
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email)
        return res.send('Error: please enter a valid email');
    if (!password)
        return res.send('Error: please enter a valid password');
    if (email === 'mickey@mouse.com' && password === '1234') {
        req.session = { loggedIn: true, email: email };
        res.redirect('/');
    }
    else {
        res.send('Incorrect email or password. Please try again.');
    }
});
