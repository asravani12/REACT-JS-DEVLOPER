import React from 'react';

class Logindetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
                   }
    }
    render(){
        return(
            <div className="from1">
              <div classname="from-login">
                <label className="username">Username
                </label>  
                <div className="from-username">
                 <input type="text" id="Username" name="Username" placeholder="enter your name" ></input>

                </div>
                <div classname="from-login">
                    <label className="Email">Email</label>

                </div>
                <div className="from-Email">
                    <input type="text" id="Email" name="Email" placeholder="enter your email"></input>
                 </div>
                 <div className="from -login">
                     <label className="Password">password</label>
                 </div>
                 <div className="from-password">
                     <input type="text" id="password" name="password" placeholder="enter your password"></input>

                 </div>
                 <div className="from-next">
                  <button className="submit">Next</button>
                 </div>
              </div>

            </div>
        );
    }

}
export default Logindetails;