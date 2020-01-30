import React from 'react';
//import './App.css';
//import { BrowserRouter as Router } from "react-router-dom";
//import  {Links}  from "./Links";
//import  Customer from './Customer ';
import ErrorBoundary from './ErrorBoundary';
import Fragment from './Fragment';
import Hero from './Hero';
function App() 
{
  return (
    <div className="App">
     <ErrorBoundary>
       <Hero heroName="batman"/>
     </ErrorBoundary>
     <ErrorBoundary>
       <Hero heroName="superman"/>
     </ErrorBoundary>
     <ErrorBoundary>
       <Hero heroName="sravani"/>
     </ErrorBoundary>
     <Fragment/>
    </div>
  );

}
export default App;