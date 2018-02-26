/*import React from 'react';*/
import React, { Component } from 'react';
import './SearchBar.css';

/*const sortByOptions = {
  'Best Match':'Best Match',
  'Highest Rated':'Highest Rated',
  'Most Reviewed':'Most Reviewed'
};*/

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: '',location:'',sortBy:'best_match'};

       this.handleTermChange = this.handleTermChange.bind(this);
       this.handleLocationChange = this.handleLocationChange.bind(this);
       this.handleSearch = this.handleSearch.bind(this);


       this.sortByOptions = {
         'Best Match': 'best_match',
         'Highest Rated': 'rating',
         'Most Reviewed': 'review_count'
       };
    }

    /*searchYelp(term, location, sortBy) {
      console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    }*/
    getSortByClass(sortByOption){
      if(this.state.sortBy===sortByOption){
        return 'active';
      }else{return '';}
    }
    handleTermChange(event){
      this.setState({term: event.target.value});
    }

    handleLocationChange(event){
      this.setState({location: event.target.value});
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
      }

      handleSortByChange(sortByOption){
        this.setState({sortBy:sortByOption});
      }
  renderSortByOptions(){
  return Object.keys(this.sortByOptions).map(sortByOption =>
      {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>;
      }
    )}

    render(){
      return(
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
            <input placeholder="Where?" onChange={this.handleLocationChange}/>
          </div>
          <div className="SearchBar-submit">
            <a onClick={this.handleSearch}>Let's Go</a>
          </div>
        </div>

      )
    }
  };

export default SearchBar;
