import React from 'react'
class Registration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <div className="second">
            <div classname="second-page">
                <div className="firstname">
                    <label className="firstname">firstname</label>
                </div>
                <div className="name">
                    <input type="text" id="firstname"name="firstname"placeholder="enter your firstname"></input>
                </div>
                <div className="lastname">
                    <label className="lastname">lastname</label>
                </div>
                <div className="name">
                    <input type="text" id="lastname"name="lastname"placeholder="enter your lastname"></input>
                </div>
                <div className="">
                    <label className="firstname">firstname</label>
                </div>
                <div className="name">
                    <input type="text" id="firstname"name="firstname"placeholder="enter your name"></input>
                </div>
                <div className="firstname">
                    <label className="firstname">firstname</label>
                </div>
                <div className="name">
                    <input type="text" id="firstname"name="firstname"placeholder="enter your name"></input>
                </div>
                <div className="submit">
                    <button className="submit">Submit</button>
                </div>

            </div>
            </div>
        );
    }
}
export default Registration;