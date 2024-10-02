import express from 'express';

/**
 * Adds middlewares to the given eexpres application.
 * @param {express.Express} api The xpress application.
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
