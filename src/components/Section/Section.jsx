import React,{useEffect,useState} from 'react'
import AlbumSection from "./AlbumSection.jsx"
import {fetchNewAlbums,fetchSongs,fetchTopAlbums} from "../../apis/api.js"


const Section = () => {
    const [topAlbumSongs, setTopAlbumSongs] = useState([])
    const [newAlbumSongs, setNewAlbumSongs] = useState([])

    const generateTopAlbumSongs = async () => {
        try {
          const topAlbumSongs = await fetchTopAlbums()
          setTopAlbumSongs(topAlbumSongs)
        }
        catch (error) {
          console.log(error)
          return null
        }
    
      }
      const generateNewAlbumSongs = async () => {
        try {
          const newAlbumSongs = await fetchNewAlbums()
          console.log(newAlbumSongs);

          setNewAlbumSongs(newAlbumSongs);
          // setFilteredDataValues(newAlbumSongs);
        }
        catch (error) {
          console.log(error)
          return null
        }
      }
    

    useEffect(() => {
    
        generateTopAlbumSongs();
        generateNewAlbumSongs();
        // setFilteredDataValues(newAlbumSongs);
    
      }, [])

  return (
    <div>
        <AlbumSection data={topAlbumSongs} title="Top Albums" />
        <AlbumSection data={newAlbumSongs} title="New Albums" />
        
        
    </div>
  )
}

export default Section