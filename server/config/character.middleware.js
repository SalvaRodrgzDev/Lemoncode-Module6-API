const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-hotel.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  switch (req.path) {
    case '/character':
      characterMiddleware(req, res, next);
      break;
    case '/location':
      characterMiddleware(req, res, next);
      break;
    default:
      next();
  }
};
