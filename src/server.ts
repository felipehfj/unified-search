import loadenv from './services/loadenv';
import app from './app';

loadenv.init();
app.listen(process.env.PORT || 3333);