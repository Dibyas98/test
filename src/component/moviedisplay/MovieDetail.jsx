import React, { useContext } from 'react'
import "./moviedetail.css"
import { Data } from '../store/Store'
import BookDetail from '../bookovie/BookDetail';
import { useNavigate } from 'react-router-dom';

export default function MovieDetail() {
    const {movie,dia,setDia} = useContext(Data)
    const img= movie.image?movie.image.medium:null
    const navigate = useNavigate();
    if(Object.keys(movie).length === 0){
      return navigate('/')
    }
  return (
    <div className='moviedetail'>
      <div className='moviecontainer'>
        {/* {movie.image?<img src={img} alt="" />:<img src=''/>} */}
        <div>
            <h1>{movie.name}</h1>
            <h2 style={{fontStyle:'italic'}}>Lang:-{movie.language}</h2>
            <h2>Type:-{movie.genres.join(" ")}</h2>
            <h3>{movie.schedule.time} <span>{movie.schedule.days[0]}</span></h3>
            {movie.average?<h3>Rate:{movie.average}</h3>:null}
            <p style={{fontSize:'1.1rem',lineHeight:'1.4rem'}} dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
            <button style={{width:'70px',height:"40px"}} onClick={()=>(setDia(true))}>Book</button>
        </div>
        
        
      </div>
      {dia?<BookDetail></BookDetail>:null}
    </div>
  )
}
