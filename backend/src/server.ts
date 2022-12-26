import 'dotenv/config';
import App from './app';

const PORT = process.env.APP_PORT || 5550;

App.start(PORT);
