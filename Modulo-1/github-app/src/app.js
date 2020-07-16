import React, { Component } from "react";
import AppContent from "./components/app-content";
import ajax from "@fdaciuk/ajax";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
			isFetching:false,
    };
  }
  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
		const target= e.target
		
    if (keyCode === ENTER) {
			this.setState({isFetching:true})
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
						repos:[],
						starred:[]
          })         
        })
				.always(()=>this.setState({isFetching:false }))
    }
  }
  handleRepos = () => {
    ajax()
      .get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
      .then((result) => {
        this.setState({
          repos: result,
        });
      });
  };
  handleStarred = () => {
    ajax()
      .get(
        `https://api.github.com/users/${this.state.userinfo.login}/subscriptions`
      )
      .then((result) => {
        this.setState({
          starred: result,
        });
      });
  };
  render() {
    return (
     <AppContent
				{...this.state}       
      	handleSearch={(e) => this.handleSearch(e)}
        handleRepos={this.handleRepos}
        handleStarred={this.handleStarred}
      />
    );
  }
}

export default App;
