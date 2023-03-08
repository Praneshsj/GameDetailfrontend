import React, { Component } from "react";
import GameService from "../services/GameService";

class UpdateGameComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      gameName: "",
      publisherName: "",
      genre: "",
      url: ""
    };
    this.changeGameNameHandler = this.changeGameNameHandler.bind(this);
    this.changePublisherNameHandler = this.changePublisherNameHandler.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  componentDidMount() {
    GameService.getGameById(this.state.id).then((res) => {
      let game = res.data;
      this.setState({
        gameName: game.gameName,
        publisherName: game.publisherName,
        genre: game.genre,
        url: game.url
      });
    });
  }

  updateGame = (e) => {
    e.preventDefault();
    let game = {
      gameName: this.state.gameName,
      publisherName: this.state.publisherName,
      genre: this.state.genre,
      url: this.state.url
    };
    console.log("game => " + JSON.stringify(game));
    console.log("id => " + JSON.stringify(this.state.id));
    GameService.updateGame(game, this.state.id).then((res) => {
      this.props.history.push("/games");
    });
  };

  changeGameNameHandler = (event) => {
    this.setState({ gameName: event.target.value });
  };

  changePublisherNameHandler = (event) => {
    this.setState({ publisherName: event.target.value });
  };

  changeGenreHandler = (event) => {
    this.setState({ genre: event.target.value });
  };
  changeImageHandler = (event) => {
    this.setState({ url: event.target.value });
  };

  cancel() {
    this.props.history.push("/games");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 cardshadow3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Game Name: </label>
                    <input
                      placeholder="game Name"
                      name="gameName"
                      className="form-control"
                      value={this.state.gameName}
                      onChange={this.changeGameNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label id='he'>Publisher Name: </label>
                    <input
                      placeholder="Publisher Name"
                      name="publisherName"
                      className="form-control"
                      value={this.state.publisherName}
                      onChange={this.changePublisherNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Genre: </label>
                    <input
                      placeholder="Genre"
                      name="genre"
                      className="form-control"
                      value={this.state.genre}
                      onChange={this.changeGenreHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Cover-Image: </label>
                    <input
                      placeholder="Url"
                      name="image"
                      className="form-control"
                      value={this.state.url}
                      onChange={this.changeImageHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.updateGame}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateGameComponent;
