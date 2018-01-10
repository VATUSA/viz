import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nodes from './nodes';

export default combineReducers({
  nodes,
  routing: routerReducer,
});
