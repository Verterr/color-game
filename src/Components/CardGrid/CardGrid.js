import React, {Component} from "react";
import * as actions from "../../store/gameLogic";
import {connect} from "react-redux";
import styled from "styled-components";
import {Card} from "@material-ui/core";

const Color = styled(Card)`
    width: 50px;
    height: 50px;
    `;

class CardGrid extends Component {
    cardList = [];
    renderCards = () => {
        for (let i = 0; i < Math.pow(this.props.gameSize, 2); i++){
            this.cardList.push(<Color key={i}/>)
        }
    }

    render() {
        this.renderCards();
        return this.cardList.map(card => <Color key={card.key}/>)
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

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid);
