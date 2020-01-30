import React from 'react'
//import {UtilCurrency}from './util'
import {connect}from 'react-redux'
class Product extends Component{
    componentwillmount(){this.props.FetchProducts}
    render()
    {
        const productItems=this.props.product.map(product=>
            <div className="col-md-4" key={product.id}>
                <div className="thumball text-center">
                    <a href={# $(product.id)*} onClick={this.props.handleAdd To Card}>
        <img src={*/products/S(product.sku).jpg} alt={product.title}/>
        <p>{products.title}</p>
        <div>
        </div>
            <b>{(product.price)}</b>
            <button className="btn-btn-primary" onClick={(e)this.props.handleAddtoCart(e,product)}>add to cart</button>
        </div>

    </div>
     return(
         <div className="row">
         {product.Items}
         </div>
         )   
            
    
    }
}
const mapStateToprops=State=>{products:State.products.filteredItem});
export default connect(mapStateToprops,{Ftch products})(product);