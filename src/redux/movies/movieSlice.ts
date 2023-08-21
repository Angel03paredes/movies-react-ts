import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({    
    name: 'movie',
    initialState: {
        movies: [],
        movie: {},
        loading: false,
    },
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload;
        },  
        getMovie: (state, action) => {
            state.movie = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }   
});

export const { getMovies, getMovie, setLoading } = movieSlice.actions;
export default movieSlice.reducer;