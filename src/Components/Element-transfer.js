import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';

function Elementtransfer() {
  const [bucket1,setBucket1]=useState([]);
  const [bucket2,setBucket2]=useState([]);
  const [select,Setselect]=useState([])

  useEffect(()=>{
    setBucket1([{name:"BOOKS"},{name:"MOBILE"}]);
    setBucket2(["Laptop","Fan"])
  },[])
  return (
    <>
    <Topbar/>
    <div className='bucket-container'>
      <div className='bucket'>
       <h1>bucket 1</h1>
        {bucket1.length==0 ? (<div>Empty</div>):(<>{bucket1.map((val,index)=>(
          <div key={index}>
            <p className='items'>{val.name}</p>
          </div>
        ))}</>) }
      </div>
      <div className='button-group'>
        <button className='button'>Add</button>
        <button className='button'>Remove</button>
        <button className='button'>Add All</button>
        <button className='button'>Remove All</button>
      </div>
      <div className='bucket'>
      <h1>bucket 2</h1>
        {bucket2.length==0 ? (<div>Empty</div>):(<>{bucket2.map((val,index)=>(
          <div key={index}>
            <p className='items'>{val}</p>
          </div>
        ))}</>) }
      </div>

    </div>
    </>
  )
}

export default Elementtransfer