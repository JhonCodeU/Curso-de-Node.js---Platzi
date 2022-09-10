import express from 'express';
import morgan from 'morgan';
import config from '../config.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import expressJSDocSwagger from 'express-jsdoc-swagger'

const options = {
  info: {
    version: '1.0.0',
    title: 'Social Network API Documentation',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
};

expressJSDocSwagger(app)(options);

/**
 * GET /api/v1
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
app.get('/api/v1', (req, res) => res.json({
  success: true,
}));

//Router configuration
import user from './components/user/network.js';
import auth from './components/auth/network.js';
app.use('/api/users', user);
app.use('/api/auth', auth);

app.listen(config.api.port, () => {
    console.log(`Listening http://localhost:${config.api.port}`);
});