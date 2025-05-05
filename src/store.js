import { createStore, combineReducers } from 'redux';
import { todoReducer, themeReducer } from './reducers';

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
