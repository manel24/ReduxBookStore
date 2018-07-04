import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//any key passed to combineReducers will end up a key in the global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
