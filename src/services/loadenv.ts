const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../', '../', '.env.' + process.env.NODE_ENV)
});

class LoadEnv {
  NODE_ENV: string;
  PORT: number;
  MONGO_URI: string;

  constructor() {
    dotenv.config({
      path: path.resolve(__dirname, '../', '../', '.env.' + process.env.NODE_ENV)
    });

    this.NODE_ENV = process.env.NODE_ENV || 'production';
    this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333;
    this.MONGO_URI = process.env.MONGO_URI || '';
  }

  init = () => {
    this.NODE_ENV = process.env.NODE_ENV || 'production';
    this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 3333;
    this.MONGO_URI = process.env.MONGO_URI || '';

    return true;
  }
}


export default new LoadEnv();