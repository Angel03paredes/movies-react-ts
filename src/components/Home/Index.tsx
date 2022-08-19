import React from 'react'
import axios from "axios"
import { useEffect } from "react";
import ItemList from './ItemList';

function Index() {
    
    const [page,setPage] = React.useState(1);
    const [movies,setMovies] = React.useState([]);
    const options = {
        method: 'GET',
        url: 'https://movies-app1.p.rapidapi.com/api/movies',
        params: {page, sort: 'createdAt'},
        headers: {
          'X-RapidAPI-Key': '3b96921ab7msh1cc06a0868c737ap1594fajsn7633e08f0787',
          'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
        }
      };
      useEffect(()=>{
       if(false){
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
       }
    },[])
  return (
    <>
        <div className='flex flex-col space-y-4 '>
           <ItemList name={"hola"} />
           <ItemList name={"hola"} />
           <ItemList name={"hola"} />
        </div>
    </>
  )
}

export default Index