import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index.js'
import thunkMiddleware from 'redux-thunk'

var state = {
    news: []
}

const store = createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)


export default store

