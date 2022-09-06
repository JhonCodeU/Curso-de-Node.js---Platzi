import express from 'express';
import morgan from 'morgan';
import config from '../config.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router configuration
import user from './components/user/network.js';
app.use('/api/users', user);

app.listen(config.api.port, () => {
    console.log(`Listening http://localhost:${config.api.port}`);
});