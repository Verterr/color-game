import React, {Component} from 'react';
import styled from "styled-components";
import {Card} from "@material-ui/core";
import * as actions from "../../store/gameLogic";
import {connect} from "react-redux";

const GamePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #5210A0;
    `;

const DashboardCard = styled(Card)`
    width: 80%;
    height: 10%;
    margin-bottom: 15px;
    `;

const GameCard = styled(Card)`
    width: 80%;
    height: 70%;
    `;

class GamePage extends Component {

    setNewState = () => {
        const params = new URLSearchParams(window.location.search);
        this.props.setUsername(params.get('username'));
        this.props.setGameSize(params.get('gamesize'));
    }

    render() {
        this.setNewState();
        return(
            <GamePageContainer>
                <DashboardCard></DashboardCard>
                <GameCard></GameCard>
            </GamePageContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        gameSize: state.gameSize
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUsername: (username) => dispatch(actions.setUsername(username)),
        setGameSize: (gameSize) => dispatch(actions.setGameSize(gameSize))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
