import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';

function Elementtransfer() {
  const [bucket1,setBucket1]=useState([]);
  const [bucket2,setBucket2]=useState([]);
  const [select,Setselect]=useState([])
const myids=(id)=>{
  Setselect([...select,id])
}
const add=()=>{
  for(let id of select){
    let addbucet=bucket1.filter((val,index)=>val.id==id.id);
    let b=bucket1.filter((val,index)=>val.id!==id.id);
    console.log(addbucet,b)
    setBucket1(b);
    setBucket2([...bucket2,addbucet[0]])
  }
  Setselect([])
  
}
const remove=()=>{
  for(let id of select){
    let a=bucket1.filter((val,index)=>val.id!==id.id);
    let b=bucket2.filter((val,index)=>val.id!==id.id);
    console.log(a,b)
    setBucket1(a);
    setBucket2(b)
  }
  Setselect([])
}
const addall=()=>{
  Setselect([])
}
const removeall=()=>{

  Setselect([])
}

const total =(a)=>{
console.log(a)
}
console.log(select);
  useEffect(()=>{
    setBucket1([{name:"BOOKS",id:1},{name:"MOBILE",id:2},{name:"Light",id:3}]);
    setBucket2([{name:"Laptop",id:4},{name:"Fan",id:5},{name:"Battry",id:6}])
  },[])
  return (
    <>
    <Topbar/>
    <div className='bucket-container'>
      <div className='bucket'>
       <h1>bucket 1</h1>
        {bucket1.length==0 ? (<div>Empty</div>):(<>{bucket1.map((val,index)=>(
          <div key={index}>
            <p className='items' onClick={()=>myids(val)}>{val.name}</p>
          </div>
        ))}</>) }
        <button onClick={()=>total(bucket1)}>select bucket1</button>
      </div>
      <div className='button-group'>
        <button className='button' onClick={()=>add()}>Add</button>
        <button className='button' onClick={()=>remove()}>Remove</button>
        <button className='button' onClick={()=>addall()}>Add All</button>
        <button className='button' onClick={()=>removeall()}>Remove All</button>
      </div>
      <div className='bucket'>
      <h1>bucket 2</h1>
        {bucket2.length==0 ? (<div>Empty</div>):(<>{bucket2.map((val,index)=>(
          <div key={index}>
            <p className='items' onClick={()=>myids(val)}>{val.name}</p>
          </div>
        ))}</>) }
        <button onClick={()=>total(bucket2)}>select bucket2</button>
      </div>

    </div>
    </>
  )
}

export default Elementtransfer