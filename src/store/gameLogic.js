import * as actionTypes from './actionTypes';

export const setUsername = username => {
    return {
        type: actionTypes.SET_USERNAME,
        username: username
    }
}

export const setGameSize = gameSize => {
    return {
        type: actionTypes.SET_GAMESIZE,
        gameSize: gameSize
    }
}
