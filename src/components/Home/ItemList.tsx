import React from 'react'
import {Movie} from "./../../types/Movie"
import { useNavigate } from 'react-router-dom'

interface ItemListProps {
  movie:Movie
}
const IMG_URL = "https://image.tmdb.org/t/p/w500"



function ItemList({movie}:ItemListProps) {

  const navigate = useNavigate()

const handleClick = ()=>{
navigate(`/movie/${movie?.id}`)
}

  return (
    <div onClick={handleClick} className="rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 cursor-pointer">
                
                <img src={IMG_URL +movie.poster_path } alt="" />
                <div className="p-2">
                    <h2 className="text-lg font-semibold">{movie.title}</h2>
                    <p className="text-sm">{movie.release_date}</p>
                    <div>{movie.vote_average}</div>
                </div>
    </div>
  )
}

export default ItemList