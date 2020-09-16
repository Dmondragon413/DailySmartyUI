import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
  }

  render() {
    return (
      <div className="home">
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        </div>
        <div>
          <RecentPosts />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
