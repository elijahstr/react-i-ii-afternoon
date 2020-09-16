import React, { Component } from 'react'
import './App.css';
import data from './data'
import Display from "./Components/Display"
import ButtonControl from "./Components/ButtonControl"
import ArrayCount from './Components/ArrayCount'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: data,
      slide: 0,
    }
    this.slideForward = this.slideForward.bind(this);
    this.slideBackward = this.slideBackward.bind(this);

  }

  slideForward(){
    if(this.state.slide!==this.state.arr.length-1){
    let plus = this.state.slide+=1;
    this.setState({slide: plus});
    }
  }

  slideBackward(){
    if(this.state.slide!==0){
    let minus = this.state.slide-=1;
    this.setState({slide: minus});
    }
  }
  
  render() {
    return (
      <section className="App">
        
        <header>
          <h2 className="home-text">Home</h2>
          </header>


          <section className="body">

            <section className="white-box">
              
              <section className="array-count">
                <ArrayCount current={this.state.arr[this.state.slide].id} total={this.state.arr.length}/>
              </section>

              <section className="display">
                <Display 
                firstName={this.state.arr[this.state.slide].name.first} 
                lastName={this.state.arr[this.state.slide].name.last} 
                city={this.state.arr[this.state.slide].city}
                country={this.state.arr[this.state.slide].country} 
                title={this.state.arr[this.state.slide].title} 
                employer={this.state.arr[this.state.slide].employer} 
                movies={this.state.arr[this.state.slide].favoriteMovies}/>
              </section>

            </section>


            <section className="buttons">
              <button onClick={this.slideBackward} className="prev-next" id="prev">  <span role="img" aria-label="left arrow">⬅️ </span>Previous</button>
              
              <span>
                <button className="edn-styling">Edit</button>
                <button className="edn-styling">Delete</button>
                <button className="edn-styling">New</button>
                </span>

              <button onClick={this.slideForward} className="prev-next" id="next">Next <span role="img" aria-label="right arrow">➡️</span></button>

            </section>




          </section>

      </section>
    )
  }
}


