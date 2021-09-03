import React, { Component } from "react";

class Character extends Component {

  constructor(props) {
      super(props);
      this.state = {
          quote: "Eat my shorts",
          character: "Bart Simpson",
          image:
              "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
          characterDirection: "Right",
          prueba: false
      };
  }

  callTheApi = () => {
    let url = "https://simpsons-quotes-api.herokuapp.com/quotes";

    fetch(url)
      .then(urlInfo => {
        return urlInfo.json();
      })
      .then(jsonInfo => {
        console.log(jsonInfo);
        this.setState({
          quote: jsonInfo[0].quote,
          character: jsonInfo[0].character,
          image: jsonInfo[0].image,
          characterDirection: jsonInfo[0].characterDirection,
          prueba: true
        });
      });
  };

  render() {
    return (
      <div className="text-center">
        <h1>{this.state.character}:</h1>
        <p>"{this.state.quote}"</p>
        <img src={this.state.image} alt={this.state.character} />
        <button onClick={this.callTheApi}>Next Character</button>
      </div>
    );
  }
}

export default Character;