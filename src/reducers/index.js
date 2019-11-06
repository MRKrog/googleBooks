import { combineReducers } from 'redux';

import { bookReducer } from './bookReducer';
import { saveReducer } from './saveReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  savedBooks: saveReducer,
  searchedBooks: bookReducer,
  loading: loadingReducer,
  error: errorReducer,
})
