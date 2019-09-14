import React, { Component } from 'react'
import "./App.scss"
import Navbar  from "./components/Navbar/Navbar";
import TourList from './components/TourList/index';
import Tour from './components/Tour/Tour';


export class App extends Component {
  render() {
    return (
     <main>
        <Navbar />
        <TourList/>

     </main>
    )
  }
}

export default App
