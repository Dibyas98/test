import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const Data = createContext();
export default function Store({ children }) {
  const [apiList, setApiList] = useState([]);
  const [movie,setMovie] = useState({})
  const [dia,setDia] = useState(false)
  const [user,setuser] =useState(()=>{
    const storedata = localStorage.getItem('user');
    return storedata?JSON.parse(storedata):[]
  })
  const [single,setSingle]=useState({})

  useEffect(() => {
    async function Apicall() {
      try {
        let res = await axios.get("https://api.tvmaze.com/search/shows?q=all");

        setApiList(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    Apicall();
  }, []);
  // console.log(user);
  
  const handelmovieDetail = (arg)=>{
    setMovie((pre)=>arg)
  }
  const loc=(arg)=>{
    localStorage.setItem('data',JSON.stringify([...user,arg]))
  }
  

  return <Data.Provider value={{loc,user,setuser,dia,setDia,apiList,handelmovieDetail,movie,setMovie}}>{children}</Data.Provider>;
}
