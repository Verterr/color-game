import React, {Component} from "react";
import * as actions from "../../store/gameLogic";
import {connect} from "react-redux";
import styled from "styled-components";
import {Card} from "@material-ui/core";

const Color = styled(Card)`
    width: 50px;
    height: 50px;
    background: ${props => props.color} !important;
    `;

class CardGrid extends Component {

    colorGenerator = () => {
        let color = '';
        const num = Math.random();
        if(num <= 0.25){
            color = "yellow";
        } else if (num <= 0.5) {
            color = "green";
        } else if (num <= 0.75) {
            color = "red";
        } else if (num <= 1) {
            color = "orange";
        }
        return color;
    }

    cardList = [];
    renderCards = () => {
        for (let i = 0; i < Math.pow(this.props.gameSize, 2); i++){
            const color = this.colorGenerator();
            this.cardList.push(<Color key={i} color={color}/>)
            console.log(this.cardList);
        }
    }

    render() {
        this.renderCards();
        return this.cardList.map(card => <Color key={card.key} color={card.props.color}/>)
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
