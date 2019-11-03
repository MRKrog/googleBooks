import { combineReducers } from 'redux';

import { bookReducer } from './bookReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  searchedBooks: bookReducer,
  loading: loadingReducer,
  error: errorReducer,
})
