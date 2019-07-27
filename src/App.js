import React from "react";
import SearchBox from "./Components/SearchBox/SearchBox.component";
import { CardList } from "./Components/Card-List/Card-List.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      HEROES: [],
      SEARCH_BOX: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/CongLiu-CN/HerosData/master/HerosData.js"
    )
      .then(response => response.json())
      .then(heroes => this.setState({ HEROES: heroes }));
  }

  onSearchChange = e => {
    this.setState({
      SEARCH_BOX: e.target.value
    });
  };

  render() {
    const { HEROES, SEARCH_BOX } = this.state;
    const filteredHeroes = HEROES.filter(hero =>
      hero.name.includes(SEARCH_BOX)
    );
    return (
      <div className="App">
        <div className="header">
          <h1 className="title title-en">Water Margin Heroes</h1>
          <h1 className="title title-cn">水浒英雄册</h1>
          <SearchBox
            placeholder={`Search Heroes`}
            onSearchChange={this.onSearchChange}
          />
        </div>
        <CardList heroes={filteredHeroes} />
      </div>
    );
  }
}

export default App;
