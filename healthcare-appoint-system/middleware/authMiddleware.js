const jwt = require('jsonwebtoken');
const SECRETKEY = "REQUIREDFORAUTH"
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token required' });
    jwt.verify(token, SECRETKEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });
        req.user = decoded;
        next();
    });
};
