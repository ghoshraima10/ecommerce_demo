import React, { useEffect, useState } from "react";

import './Products.css';
import Pagination from '../pagination/Pagination';


const Products = (props) => {
    console.log(props);
    
    const [currentPage , setCurretPage]=useState(1);
    const productsPerPage =8;
    const lastIndex= currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const Prod = props.props.slice(firstIndex,lastIndex);
    return (<div>
        <div className="box-container">
            
            { Prod.map((item,i) => {
                return (
                    <div className="box" onClick={()=>{window.location="/product?index="+(((currentPage-1)*productsPerPage)+i)}}>
                      
                        
                        <img src={item?.image} className="pimage" alt="pimage" />
                    
                        <div className="pdetails">
                            <h5>{item?.category}</h5>
                            <div className="price">
                                <p>price</p>
                                <p><b>{item?.price}/-</b></p>
                            </div>
                            <a href="" className="plink btn" onClick={()=>{alert("Product added!")}}>add to cart</a>
                        </div>
                    </div>
                )
            })}
</div>
<Pagination  data={props.props} setCurretPage={setCurretPage} currentPage={currentPage}/>
</div>

    )

};

export default Products;