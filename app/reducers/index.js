import { combineReducers } from 'redux';
import home from './home';
import sites from './sites';

const reducers = combineReducers({
  home,
  sites,
});

export default reducers;
