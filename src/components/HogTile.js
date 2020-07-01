import React, {Component} from "react"

class HogTile extends Component {

constructor(){
    super()
    this.state = {showDetails: false}
}

//Underscore a hogs name so it can be invoked in renderHogImage 
//Because hog-imgs file names are the underscored names of the hogs
underscoreHogName = () => { return this.props.hogName.toLowerCase().replace(/ /g,'_') }

//Render an <img> tag w/ the src pointing to the relative hog file path   
renderHogImage = () => {
    let pigImage = require(`../hog-imgs/${this.underscoreHogName()}.jpg`)
    return <img src={pigImage} alt=""/>
}

handleClick = () => {
    return this.setState( {showDetails: true} )
}

renderHogDetails = () => {
    return <div>
       <p> Specialty: {this.props.hogSpecialty} </p>
        <p> {this.props.hogGreased? "Greased" : "Not Greased" } </p>
        <p> Weight: {this.props.hogWeight} </p>
        <p> Medal Achieved: {this.props.hogMedal} </p>
    </div>
}

    //Render a Hog tile With each hogs data
    render() {
      return (
        <div className="pigTile" onClick={this.handleClick}>
        <h3> {this.props.hogName} </h3> 
        {this.renderHogImage()}
        { this.state.showDetails ? this.renderHogDetails() : null}
        </div>
      );
    }
  }

export default HogTile;