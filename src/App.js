import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Home from './views/Home';
import About from './views/About';
import { Routes, Route } from 'react-router-dom';




export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'April',
    }
  }


  render() {
    return (
    
      <div> 
         <Navbar myName={this.state.name} />
        <h1>this is the main app</h1>

        <Routes> 
        <Route path= '/' element={<Home />}/>
          <Route path= '/About' element={<About />}/>
        </Routes>
        <Card />
        
      </div>
      
        
        
        
    )
  }
}

