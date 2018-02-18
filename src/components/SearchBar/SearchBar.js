/*import React from 'react';*/
import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match':'Best Match',
  'Highest Rated':'Highest Rated',
  'Most Reviewed':'Most Reviewed'
};

class SearchBar extends Component{
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption =>
      {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}> {sortByOptionValue} </li>;
      }
    )};
    render(){
      return(
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Businesses" />
            <input placeholder="Where?" />
          </div>
          <div className="SearchBar-submit">
            <a>Let's Go</a>
          </div>
        </div>

      )
    }
  };

export default SearchBar;
