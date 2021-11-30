import React, { useEffect } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import Myheader from '../../components/Header/header.component.js';
import Subheader from '../../components/subheader/subheader.js';
/**
* @author
* @function ProductList
**/

const ProductList = (props) => {

  const dispatch =useDispatch();
  useEffect(() => {
    // const { match } = props;
    console.log(props)
    dispatch(getProductsBySlug());
  }, []);

  
  return(
    <div>
           <div className="container">
       <div className="row">
         <div className="col" style={{height:"30px", border: "1px solid #ccc"}}>
           <div className="card">
             
           </div>
         </div>

         <div className="col" style={{height:"30px", border: "1px solid #ccc"}}>
           <div className="card">
             
           </div>
         </div>

         <div className="col" style={{height:"30px", border: "1px solid #ccc"}}>
           <div className="card">
             
           </div>
         </div>

         <div className="col" style={{height:"30px", border: "1px solid #ccc"}}>
           <div className="card">
             
           </div>
         </div>
       </div>
     </div>

    </div>
  )
  ;}

export default ProductList