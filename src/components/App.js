import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogTile from "./HogTile";
import FilterAndSortHogs from "./FilterAndSortHogs";

class App extends Component {
//Define the initial state of 
  constructor(){
    super()
    this.state = { 
      seeOnlyGreasedHogs: false,
      sortBy: "none"
    }
}

//These functions will be passed down as props
// & invoked in the Child component <FilterAndSortHogs />

//Change seeGreased to the opposite boolean
handleFilter = () => {
  this.setState( (prevState) => { return {seeOnlyGreasedHogs : !prevState.seeOnlyGreasedHogs} }, this.renderFilteredHogs )
}

renderFilteredHogs = () => {
  const onlyGreasedHogs = hogs.filter( hog => hog.greased )
  return this.setState.seeOnlyGreased ? this.renderHogTiles(onlyGreasedHogs) : this.renderHogTiles(hogs)
}

handleSort = () => {
  this.setState( { 
   
  } )
}


  //Iterate over the hogs array & render a tile for each hog
  //Pass each Hog tile that hogs data
   renderHogTiles = (hogsToRender) => {
    return hogsToRender.map((hog, index) =>
    <HogTile key={index}
    hogName={hog.name}
    hogSpecialty={hog.specialty}
    hogGreased={hog.greased}
    hogWeight={hog.weight}
    hogMedal={hog['highest medal achieved']} />
    )
   }

  render() {
    return (
      <div className="App">
        <Nav />
        <FilterAndSortHogs handleFilterEvent={this.handleFilter} handleSortEvent={this.handleSort} />
        {this.renderHogTiles(hogs)}
      </div>
    );
  }
}

export default App;
