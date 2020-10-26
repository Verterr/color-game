import React, {Component} from "react";
import {Card, Button} from "@material-ui/core";
import GameConfig from "./GameConfig/GameConfig";
import styled from 'styled-components';
import videoBg from '../../Assets/video_bh.mp4';


const MainPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    `;

const StyledCard = styled(Card)`
    width: 600px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    opacity: 85%;
    `;

const Header = styled.h1`
      font-size: 3em;
    `;

const PlayButton = styled(Button)`
      width: 60%;
    `;

const VideoBg = styled.video`
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      overflow: hidden;
      `;


export default class MainPage extends Component {
    state = {
      openGameConfig: false
    };

    openGameConfig = () => {
        this.setState({openGameConfig: true});
    }
    render() {
        let gameConfig;
        if(this.state.openGameConfig) {
            gameConfig = <GameConfig/>
        }
        return (
        <MainPageContainer>
            {gameConfig}
            <VideoBg autoPlay={true} loop={true} id="videoBg">
                <source src={videoBg} type="video/mp4"/>
            </VideoBg>
            <StyledCard>
                <Header>Color Game</Header>
                <PlayButton variant="contained" color="primary" onClick={this.openGameConfig}>Play</PlayButton>
            </StyledCard>
        </MainPageContainer>
    )}
};
