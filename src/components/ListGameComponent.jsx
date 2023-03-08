import React, { Component } from "react";
import GameService from "../services/GameService";
import {
  BsFillTrashFill,
  BsPencilFill,
  BsFillEyeFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";

class ListGameComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
    this.addGame = this.addGame.bind(this);
    this.editGame = this.editGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  deleteGame(id) {
    GameService.deleteGame(id).then((res) => {
      this.setState({
        games: this.state.games.filter((game) => game.id !== id),
      });
    });
  }
  viewGame(id) {
    this.props.history.push(`/view/${id}`);
  }
  editGame(id) {
    this.props.history.push(`/edit/${id}`);
  }

  componentDidMount() {
    GameService.getGames().then((res) => {
      this.setState({ games: res.data });
    });
  }

  addGame() {
    this.props.history.push("/add/_add");
  }

  render() {
    return (
      <div>
        <div className="row mt-4">
          <button
            className=""
            onClick={this.addGame}
          >
            <BsFillPlusCircleFill /> Add Game{" "}
          </button>
        </div>
        <br></br>
        <div className="card p-5 row cardshadow3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center"> Cover </th>
                <th className="text-center"> Game Name</th>
                <th className="text-center"> Publisher Name</th>
                <th className="text-center"> Genre</th>
                <th className="text-center"> Tasks</th>
              </tr>
            </thead>
            <tbody>
              {this.state.games.map((game) => (
                <tr key={game.id}>
                  <td className="text-center">
                    <img
                      src={game.url}
                      className="profile-image"
                      alt="dynamic"
                    />
                  </td>
                  <td> {game.gameName} </td>
                  <td> {game.publisherName}</td>
                  <td> {game.genre}</td>
                  <td className="text-center">
                    <button
                      onClick={() => this.viewGame(game.id)}
                      className="btn-hover btn-hover-x color-1"
                    >
                      <BsFillEyeFill />
                    </button>
                    <button
                      onClick={() => this.editGame(game.id)}
                      className="ml-2 btn-hover btn-hover-x color-7"
                    >
                      <BsPencilFill />
                    </button>
                    <button
                      onClick={() => this.deleteGame(game.id)}
                      className="ml-2 btn-hover btn-hover-x color-11"
                    >
                      <BsFillTrashFill />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListGameComponent;
