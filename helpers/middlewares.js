exports.isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    const err = new Error('Unauthorized');
    err.status = 401;
    err.statusMessage = 'Unauthorized';
    next(err);
  }
};

exports.isNotLoggedIn = () => (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    const err = new Error('Forbidden');
    err.status = 403;
    err.statusMessage = 'Forbidden';
    next(err);
  }
};

exports.validationLoggin = () => (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const err = new Error('Unprocessable Entity');
    err.status = 422;
    err.statusMessage = 'Validation error';
    next(err)
  } else {
    next();
  }
}