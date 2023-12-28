import React from 'react'
import AlbumSection from "./AlbumSection"
import {fetchNewAlbums,fetchSongs,fetchTopAlbums} from "../../apis/api"


const Section = () => {
  return (
    <div>
        <AlbumSection fetchTopAlbums title="Top Albums" />
        <AlbumSection fetchNewAlbums title="New Albums" />
        
        
    </div>
  )
}

export default Section