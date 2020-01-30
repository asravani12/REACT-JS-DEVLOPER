import React from 'react';
class Fragment extends React.Component {   
    render() {    
     return (   
        //Extraneous div element   
        <Fragment>  
          <h2> Hello World! </h2>   
          <p> Welcome to the JavaTpoint. </p>   
        </Fragment>   
     );   
    }   
}  
export default Fragment;