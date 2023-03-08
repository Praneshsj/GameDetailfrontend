import React, { Component } from "react";
import GameService from "../services/GameService";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
class ViewGameComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      game: {},
    };
  }

  componentDidMount() {
    GameService.getGameById(this.state.id).then((res) => {
      this.setState({ game: res.data });
    });
  }

  render() {
    return (
      <div id="all">
        <br></br>
        <div className="card col-md-6 offset-md-3 cardshadow3 mt-5">
          <h3 className="text-center mt-3 text-primary"> View Details</h3>
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <img
                  src={this.state.game.url}
                  className="profile-image-x ml-5"
                  alt="dynamic"
                />
              </div>
              <div className="col-7">
                <div className="row">
                  <label id="he">Game Name : </label>
                  <div className="ml-2"> {this.state.game.gameName}</div>
                </div>
                <div className="row">
                  <label id="he">Publisher Name : </label>
                  <div className="ml-2"> {this.state.game.publisherName}</div>
                </div>
                <div className="row">
                  <label id="he">Genre : </label>
                  <div className="ml-2"> {this.state.game.genre}</div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/" className="btn btn-primary mt-2 mb-4">
            <BsFillArrowLeftCircleFill /> Back
          </Link>
        </div>
      </div>
    );
  }
}

export default ViewGameComponent;
