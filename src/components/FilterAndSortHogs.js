import React, { Component } from "react";

class FilterAndSortHogs extends Component {


  render() {
    return (
      <div className="filterWrapper">
    {/* A checkbox so we can filter by greased  */}
      <label>Greased </label>
        <input 
          type="checkbox"
          onChange={this.props.handleFilterEvent}
          // onClick={() => this.props.toggleFilterGreased()}
        //   checked={this.props.filterGreased}
        />
        <br/>

    {/* A drop-down menu so we can sort by name or weight  */} 
        <label>Sort </label>
        <select 
        onChange={this.props.handleSortEvent}
        //   onChange={(event) => this.props.updateSort(event.target.value)}
        //   value={this.props.sortBy}
        >
          <option value={null}> - None - </option>
          <option value="name">Alphabetically</option>
          <option value="weight">By Weight</option>
        </select>
      </div>
    );
  }
}

export default FilterAndSortHogs;
