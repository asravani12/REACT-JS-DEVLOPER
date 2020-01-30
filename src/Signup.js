import React from 'react';
import './Signup.css';
class Loginup extends React.Component
{
    constructor()
    {
      super();
      this.state={ };
      
    }
    render() 
    {
        return(
            <div id="maindiv">
                <nav className="first1container">
                  <div className="flex1"><p>Balance</p>
                  <b>100001</b>
                  </div>
                   <div className="flex1"><p>value</p>
                   <br></br>
                   <b>$10001</b>
                   </div>
                 </nav><br></br>
                <div id="classname">
                <ul type="circle">
                   
                  <li> +1(480)487-7312</li>
                    <label>sarahjahr@gmail.com</label>
                    <li>1105 Green Grove Rd.</li>
                    <li>Neptune City.New Jorsey.07752</li>
                    <li>united state</li>
                </ul>

                
                
                </div>
                <div className="img">
                
                </div>
                <b>Dividendly you can own <span classname="span">XXX,000</span> shares in STG</b>
                <br></br>
                <div className="flex-container">
                   <div id="flexbox">
                    <h6>Quarterly</h6>  <b>1</b><br></br>
                    <b>1,00,000</b><br></br>
                   <from >
                   <button clasname="sravani">CLAMED </button>
                     </from>
                   </div>
                   <div id="flexbox">
                    <h6>Quarterly</h6><pre><b>2020</b></pre><br/>
                   <b>1,00,000</b>
                   
                   <br></br>
                   <from >
                     <button>CLAMED </button>
                     </from>
                   </div>
                   <div id="flexbox">
                    <h6>Quarterly </h6><b>3</b><br/>
                   <b>1,00,000</b>
                   
                   
                     </div>
                </div>
            
            </div>
           
        );
    }
}
export default Loginup;