exports.isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    const err = new Error('Unauthorized');
    err.status = 403;
    err.statusMessage = 'Unauthorized';
    next(err);
  }
};

