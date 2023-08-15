import reducer from './store/task';
import { configureStore } from '@reduxjs/toolkit';
import log from './middleware/log';
import logger from 'redux-logger';
import error from './middleware/error';

const store = configureStore({reducer, middleware: (getdefaultMiddleware) => [...getdefaultMiddleware(), logger, error]})

 export default store 