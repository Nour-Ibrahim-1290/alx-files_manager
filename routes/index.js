// eslint-disable-next-line no-unused-vars
import AppController from '../controllers/AppController';

/**
 * Injects routes with their handlers to the given Express application.
 * @param {import('express').Express} api
 */
const injectRoutes = (api) => {
  api.get('/status', AppController.getStatus);
  api.get('/stats', AppController.getStats);

  // Handle 404 errors
  api.all('*', (req, res) => {
    res.status(404).json({
      error: `Cannot ${req.method} ${req.url}`
    });
  });

  // Generic error handler
  api.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Internal Server Error',
      },
    });
  });
};

export default injectRoutes;
