import React from 'react';  

class Component extends React.Component
 {  
 constructor(props) {  
      super(props);  
      this.state = {  
         data:   
         [  
            {             
               "name":"sravani"             
            },  
            {            
               "name":"Sreelekha"             
            },  
            {    
               "name":"harika"          
            }  
         ]  
      }  
   }  
   render() {  
      return (  
         <div>  
            <StudentName/>  
            <ul>            
                {this.state.data.map((item) => <List data = {item} />)}           
            </ul>  
         </div>  
      );  
   }  
}  
class StudentName extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Student Name Detail</h1>  
         </div>  
      );  
   }  
}  
class List extends React.Component {  
   render() {  
      return (  
         <ul>            
            <li>{this.props.data.name}</li>   
         </ul>  
      );  
   }  
}  
export default Component;  