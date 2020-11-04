"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireAuth = function (req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('User not authorized.');
};
exports.default = requireAuth;
