import React from 'react'
export default class Basket extends Component
{
    render()
    {
        const{CartItems}=this.props;
        return{
            <div className ="alert .alert-info">
            {
               CartItems.length===0?"basket is empty":
            }
            <div>you have {CartItems.length}products in the basket.</div>
            {CartItems.length>0&&
            <div>
                <ul>
                 {CartItems.map(item =>)}
                    <li>
                        <b>{item.title}</b>
                        <button className="btn btn-danger"onclick={(e){this.props.handleRemove from Cart(e,item)}}>x</button>}
                    </li>
                    
                </ul>
            </div>
            }
        );

    }
}