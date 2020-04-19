import { combineReducers} from 'redux';

const initialState = {
    test: 0
}
const initialReducer = (state=initialState, action) => {
    switch (state) {
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    initialReducer
})

export default rootReducer;