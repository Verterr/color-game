import * as actionTypes from './actionTypes';
import {updateObject} from "./utility";

const initialState = {
    username: '',
    gameSize: 10,
};

const gameLogicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERNAME:
            return updateObject(state ,{username: action.username});
        case actionTypes.SET_GAMESIZE:
            return updateObject(state, {gameSize: action.gameSize});
        default:
            return state
    }
};

export default gameLogicReducer;
