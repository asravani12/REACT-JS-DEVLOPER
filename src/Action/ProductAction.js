import React from 'react'
export default Fetch product=()=>(dispatch)=>
fetch("http:localhost:8000/product")then(res=>res.json())
then(data=> this.setState({products:data,filteredproduct:data}));
return dispatch{type:FETCH-PRODUCTS,playload:data};
import {FETCH_PRODUCTS,FILTER-PRODUCTS-BY-SIZE}from'./types';
export const fetchproducts=()=>(dispatch)=>
{
    fetch("http://loaclhost:8000/products").then(res=>res.json())
    .then(data=>(
        return dispatch((type:FETCH-PRODUCTS,PAYLOAD:DATA));
    });
}
export const filteredproducts=(products,size)=>(dispatch)=>{
    return dispatch({type:FILTER-PRODUCTS-BY-SIZE,playload:{size:size})
    items:size===''?products:products.filters(&=>a.available size.indexOf(size.touppercase())>=0)}
}
}