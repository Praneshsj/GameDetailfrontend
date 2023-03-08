import axios from 'axios';
import { Component } from 'react';

const GAME_API_BASE_URL = "http://localhost:8080/GM/games"  ;

class GameService extends Component{

    getGames(){
        return axios.get(GAME_API_BASE_URL);
    }

    createGame(game){
        return axios.post(GAME_API_BASE_URL, game);
    }

    getGameById(id){
        return axios.get(GAME_API_BASE_URL + '/' + id);
    }
 
    updateGame(game, id){
        return axios.put(GAME_API_BASE_URL + '/' + id, game);
    }

    deleteGame(id){
        return axios.delete(GAME_API_BASE_URL + '/' + id);
    }
}

export default new GameService();