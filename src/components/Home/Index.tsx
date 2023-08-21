import React from 'react'
import axios from "axios"
import { useEffect } from "react";
import ItemList from './ItemList';
import {Movie} from "./../../types/Movie"
import InfiniteScroll from "react-infinite-scroll-component";

function Index() {
    
    const [isLoading, setIsLoading] = React.useState(false);
    const [page,setPage] = React.useState(1);
    const [movies,setMovies] = React.useState<Movie[]>([]);
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=210f7bf8e5325439070289b7e85478ee&language=es',
        params: {page}
      };

const fetchData = () => {   
  setIsLoading(true);
  axios.request(options).then(function (response:{data:{results:Movie[]}})  {
    setMovies([...movies,...response.data.results]);
    setPage(page+1);
    console.log(JSON.stringify(response.data.results[0]));
}).catch(function (error) {
    console.error(error);
});
setIsLoading(false);
}


      useEffect(()=>{
      fetchData();
    },[])



  return (
    <>
    <InfiniteScroll className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 '
  dataLength={movies.length}
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>} 
>
{
             movies.map((movie) => (
              <ItemList key={movie.id} movie={movie} />
            ))
          }
</InfiniteScroll>
    </>
  )
}

export default Index