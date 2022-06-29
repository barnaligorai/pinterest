const { notFound } = require('./handlers/notFound.js');

const app = () => {
  const handlers = [notFound];
  return createHandler(handlers);
};

const createHandler = (handlers) => {
  return (request, response) => {
    for (const handler of handlers)
      if (handler(request, response))
        return;
  }
};

module.exports = { createHandler, app };
