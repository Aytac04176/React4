import React, { useState } from 'react'
import './FavoritList.css'
import { useSelector } from 'react-redux'
export const FavoritList = () => {
    const favoriList = useSelector(state=>state.post)
  return (
    <div className='listFavoriDiv'>
        <h1>Favorites Film</h1>
        {
            favoriList?.map(item=>{
                if(item.id!==''){
                    return(
                        <div key={item.id} class="card">
                        <a className="card1" href={`http://localhost:5173/list/${item.id}`} target='_blank'>
                         <p className="small">{item.title}</p>
                         <div className="go-corner" href="#">
                          
                         </div>
                       </a>
                     </div>
                    )
                }
                
            })
        }
    </div>
  )
}
