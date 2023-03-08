import React, { Component } from 'react'
import GameService from '../services/GameService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

class CreateGameComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            gameName: '',
            publisherName: '',
            genre: '',
            url: ''
        }
        this.changeGameNameHandler = this.changeGameNameHandler.bind(this);
        this.changePublisherNameHandler = this.changePublisherNameHandler.bind(this);
        this.saveOrUpdateGame = this.saveOrUpdateGame.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            GameService.getGameById(this.state.id).then( (res) =>{
                let game = res.data;
                this.setState({
                    gameName: game.gameName,
                    publisherName: game.authorName,
                    genre : game.genre,
                    url : game.url
                });
            });
        }        
    }
    saveOrUpdateGame = (e) => {
        e.preventDefault();
        let game = {
            gameName: this.state.gameName, 
            publisherName: this.state.publisherName, 
            genre: this.state.genre, 
            url: this.state.url
        };
        console.log('game => ' + JSON.stringify(game));

        // step 5
        if(this.state.id === '_add'){
            GameService.createGame(game).then(res =>{
                this.props.history.push('/games');
            });
        }
        else{
            GameService.updateGame(game, this.state.id).then( res => {
                this.props.history.push('/games');
            });
        }
    }
    
    changeGameNameHandler= (event) => {
        this.setState({gameName: event.target.value});
    }

    changePublisherNameHandler= (event) => {
        this.setState({publisherName: event.target.value});
    }

    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value});
    }
    changeImageHandler= (event) => {
        this.setState({url: event.target.value});
    }

    cancel(){
        this.props.history.push('/games');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add Game</h3>
        }
        else{
            return <h3 className="text-center p-4 m-2 text-info">Update Game</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Game Name: </label>
                                            <input placeholder="GameName" name="gameName" className="form-control" 
                                                value={this.state.gameName} onChange={this.changeGameNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Publisher Name: </label>
                                            <input placeholder="Publisher Name" name="publisherName" className="form-control" 
                                                value={this.state.publisherName} onChange={this.changePublisherNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Genre: </label>
                                            <input placeholder="Genre" name="genre" className="form-control" 
                                                value={this.state.genre} onChange={this.changeGenreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Cover-Image: </label>
                                            <input placeholder="Image Url" name="image" className="form-control" 
                                                value={this.state.url} onChange={this.changeImageHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrUpdateGame}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                         
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateGameComponent
