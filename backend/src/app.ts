import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import ErrorHandler from './app/middlewares/error-handler';
import Endpoints from './routes';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(Endpoints);
    this.app.use(ErrorHandler);
  }

  public start(PORT: string | number) {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default new App();
