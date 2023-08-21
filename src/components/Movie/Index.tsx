import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {SingleMovie} from "./../../types/SingleMovie"
import axios from "axios"

const Index = () => {
    const params = useParams();
    const [loading,setLoading] = useState(false);
    const [movie,setMovie] = useState<SingleMovie>()

    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${params.movie}?api_key=210f7bf8e5325439070289b7e85478ee&language=es`,
      };
    
      const fetchData = () => {
        setLoading(true);
        axios
          .request(options)
          .then(function (response: { data: SingleMovie }) {
            setMovie(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        setLoading(false);
      };

    useEffect(()=>{
        fetchData()
    },[params.movie])

    const IMG_URL = "https://image.tmdb.org/t/p/w500"

  return (
    <>
        <div className="grid grid-cols-3">
            <div> <img src={IMG_URL+movie?.backdrop_path} alt="" /></div>
            <div className="col-span-2 px-3">
                <p className="text-6xl text-gray-400">
                    {movie?.title}
                </p>
                <p className="text-sm text-gray-500">
                    {movie?.tagline}
                </p>
                <p className="text-4xl text-gray-300">
                    Overview
                </p>
                <p className="text-xl text-gray-100">
                    {movie?.overview}
                </p>
                <p className="text-xl text-gray-100">
                    Votes : {movie?.vote_average}
                </p>
            </div>
        </div>
    </>
  )
}

export default Index