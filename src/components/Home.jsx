import Navbar from "./Navbar/Navbar";
import Products from "./products/Products";
import { useState } from "react";

const Home=(props) => {
    console.log(props)

    return (
        <div className='container'>
        <Navbar/>
        <Products props={props.data} />
      </div>
    )
}

export default Home;