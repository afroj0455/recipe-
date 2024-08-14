import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
  const [item,setitem]=useState([])
  const [items,setitems]=useState("cake")
  let searchRef = useRef()
  let getRecipe = async () =>{
    // method 1 using js fecth method
    // let res =await fetch("https://api.edamam.com/search?q=chicken&app_id=0375edee&app_key=ddfa3832b4d5bf2c9a0a7350291cef15")
    // let data =await res.json();
    // console.log(data)
    let res = await axios.get(`https://api.edamam.com/search?q=${items}&app_id=0375edee&app&app_key=ddfa3832b4d5bf2c9a0a7350291cef15`)
    console.log(res.data.hits)
    setitem(res.data.hits)

  }
  const handelSerch = (e)=>{
   e.preventDefault()
   let value=searchRef. current.value
    console.log("hello")
    setitems(value)
    searchRef.current.value=""
  }
  useEffect(()=>{
    getRecipe()
  },[items])

  return (
    <div className='pt-2'>
      <form className="d-flex  col-6 m-auto my-2 mt-2" role="search">
        <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handelSerch} className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='row m-0 p-0 gap-2 justify-content-center'>
     {
        item.map((ele,index)=>{
          return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top tada" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link  state={ele} to="/single" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>

        })
      }
      </div>
     </div>
  )
}

export default Home
