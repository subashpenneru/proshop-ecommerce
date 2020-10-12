import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const isAuth = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization
    ? req.headers.authorization.startsWith('Bearer')
      ? req.headers.authorization.split(' ')[1]
      : null
    : null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      res.json(401);
      next(new Error('Not Authorized, token failed'));
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { isAuth };
