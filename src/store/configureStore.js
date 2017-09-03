import { createStore } from "redux"
import rootReducer from "../reducers"

const configureStore = initalState =>
  createStore(
    rootReducer, 
    initalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configureStore