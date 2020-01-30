import React from 'react'
class Filter extends Component{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-4">
                    {this.props.count}product found.
                    <div className="col-md-4">
                        <label>
                            orderby
                            <select className="from-control"  value={this.props.sort}onchange={this.props.handleChangeSort}>
                                <option value="">select</option>
                                <option value="lowest">lowest to highest</option>
                                <option value="highest">  highest to lowest </option>

                            </select>
                                
                        </label>
                        <div classname="col-md-4"></div>
                        <label>
                            filter size
                            <select className="form-contorl"value={this.props.size}onChange={(e)this.props.handleChangeSize{this.props.products,e.target.value}}>
                             <option value="">select</option>
                             <option value="">All</option>
                             <option value="">xs</option>
                             <option value="">s</option>
                             <option value="">m</option>
                             <option value="">L</option>
                             <option value="">xL</option>
                             <option value="">xxL</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}