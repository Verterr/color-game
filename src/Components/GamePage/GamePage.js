import React, {Component} from 'react';
import styled from "styled-components";
import {Card} from "@material-ui/core";
import * as actions from "../../store/gameLogic";
import {connect} from "react-redux";
import CardGrid from "../CardGrid/CardGrid";

const params = new URLSearchParams(window.location.search);
let gameSize = params.get('gamesize');

const GamePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background: #5210A0;
    `;

const DashboardCard = styled(Card)`
    margin-top: 50px;
    position: relative;
    width: 80%;
    height: 80px;
    margin-bottom: 50px;
    `;

const GameCard = styled(Card)`
    width: ${gameSize*50+"px"};
    height: ${gameSize*50+"px"};
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    `;

class GamePage extends Component {

    setNewState = () => {
        this.props.setUsername(params.get('username'));
        this.props.setGameSize(params.get('gamesize'));
    }

    render() {
        this.setNewState();
        return(
            <GamePageContainer>
                <DashboardCard/>
                <GameCard>
                    <CardGrid/>
                </GameCard>
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
