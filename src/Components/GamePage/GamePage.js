import React, {Component} from 'react';
import styled from "styled-components";
import {Card} from "@material-ui/core";

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

export default class GamePage extends Component {
    render() {
        return(
            <GamePageContainer>
                <DashboardCard></DashboardCard>
                <GameCard></GameCard>
            </GamePageContainer>
        )
    }
}
