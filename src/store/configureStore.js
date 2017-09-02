import { createStore } from "redux"
import rootReducer from "../reducers"

const configureStore = initalState =>
  createStore(rootReducer, initalState)

export default configureStore