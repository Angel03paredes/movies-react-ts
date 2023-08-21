import { combineReducers } from 'redux';

export default combineReducers({
    movie: require('./movies/movieSlice').default,
});