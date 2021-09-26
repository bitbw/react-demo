import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  textInput = React.createRef();
  handleSearch = async () => {
    PubSub.publishSync("FetchDate", {
      loading: true,
    });
    let res = await axios({
      url: "https://api.github.com/search/users",
      params: {
        q: this.textInput.current.value,
      },
    });
    this.textInput.current.value = "";
    const userDatas = res.data.items;
    PubSub.publishSync("FetchDate", {
      loading: false,
      userDatas,
    });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.textInput} />
          &nbsp;<button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
