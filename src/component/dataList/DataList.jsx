import React, { useContext } from 'react'
import "./datalist.css"
import DataCard from '../dataCard/DataCard'
import  { Data } from '../store/Store'
import { nanoid } from 'nanoid'

export default function DataList() {
    const {apiList} =useContext(Data)
  return (
    <div className='datalist-cont'>
      {
        apiList.map((item)=>{
            return <DataCard key={nanoid()} detail={item.show}></DataCard>
        })
      }
    </div>
  )
}
