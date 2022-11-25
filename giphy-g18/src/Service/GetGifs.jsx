import React from 'react'

const GetGifs = async (category)=>{
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=fDRSrQobpCaXcJXfCyWlL5Gi061Rrz5b&q=${category}&limit=20`
    const response = await fetch (URL);
    const data = await response.json();
}