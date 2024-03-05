import React from "react";
import './ProdDesc.css';

const ProdDesc = (props) => {
 const query = new URLSearchParams(window.location.search);
 console.log(props)
  const product = props.data[query.get('index')];
  console.log(product)
  return (
    <div className="card">

      <div>
        <img src={product?.image} className="prodimage" alt="productimage"/>
      </div>
      <div>
        <h3>{product?.title}</h3>
        <p className="pdesc">{product?.description}</p>
        <p className="perpieceprice">Price per piece</p>
        <p><b>{product?.price}/-</b></p> <a href="" className="btn pl-0" onClick={()=>{alert("Product added !!!")}}>add to cart</a>

      </div>
    </div>
  )

};

export default ProdDesc;