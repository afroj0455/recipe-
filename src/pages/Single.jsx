import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Single = () => {
  let arr = JSON.parse(localStorage.getItem('favItem')) || [];
    let location = useLocation()
    console.log(location.state.recipe)
    let data = location.state.recipe

    const handleWishlist = ()=>{
      console.log("hello")
      console.log(location.state.recipe)
      arr.push(location.state.recipe)
      console.log(arr)

      localStorage.setItem('favItem',JSON.stringify(arr))
    }

  return (
    <div className='container mt-2'>
   
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center p-2 ">
      <img src={location.state.recipe.image} className=" col-md-12 col-12  rounded-start" alt="..." />
    </div>
    <div className="col-md-8 pe-2">
      <div className="card-body">
        <h5 className="card-title">Title:{location.state.recipe.label}</h5>
        <h6 className="card-title">Meal-Type:{location.state.recipe.mealType}</h6>
        <Link to={location.state.recipe.url} className='btn btn-success my-3'>How to make</Link>
        <button onClick={handleWishlist} className='btn btn-info ms-1'>Add to Wishlist</button>

        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <div className='row'>
            <div className="col-sm-3 text-center p-2 border border-secondary mx-1 my-1">
                <h6>Sugar</h6>
                <span>{Math.ceil(data.totalNutrients.SUGAR.quantity)}</span>
                <span>{data.totalNutrients.SUGAR.unit}</span>
            </div>
            <div className="col-sm-3 text-center p-2 border border-primary  mx-1 my-1">
                <h6>Cholesterol</h6>
                <span>{Math.ceil(data.totalNutrients.CHOLE.quantity)}</span>
                <span>{data.totalNutrients.CHOLE.unit}</span>
            </div>
            <div className="col-sm-3 text-center p-2 border border-success  mx-1 my-1">
                <h6>FAT</h6>
                <span>{Math.ceil(data.totalNutrients.FAT.quantity)}</span>
                <span>{data.totalNutrients.FAT.unit}</span>
            </div>
            <div className="col-sm-3 text-center p-2 border border-danger  mx-1 my-1">
                <h6>Calcium</h6>
                <span>{Math.ceil(data.totalNutrients.CA.quantity)}</span>
                <span>{data.totalNutrients.CA.unit}</span>
            </div>
            <div className="col-sm-3 text-center p-2 border border-dark  mx-1 my-1">
                <h6>Fiber</h6>
                <span>{Math.ceil(data.totalNutrients.FIBTG.quantity)}</span>
                <span>{data.totalNutrients.FIBTG.unit}</span>
            </div>
            <div className="col-sm-3 text-center p-2 border border-info  mx-1 my-1">
                <h6>Vitamin B12</h6>
                <span>{Math.ceil(data.totalNutrients.VITB12.quantity)}</span>
                <span>{data.totalNutrients.VITB12.unit}</span>
            </div>
           
        </div>
      </div>
    </div>
  </div>
</div>
    <ul>
        <b>Ingredient</b>
    {data.ingredientLines.map((ele)=>{
        return <li>{ele}</li>
    })}
    </ul>
   

      {/* <img src={location.state.recipe.image} alt="" /> */}
    </div>
  )
}

export default Single
