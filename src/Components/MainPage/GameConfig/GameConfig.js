import React, {Component} from "react";
import {Card, Stepper, Step, StepLabel, TextField, Button, Slider, Input, Typography} from "@material-ui/core";
import styled from 'styled-components';

const Wrapper = styled.div`
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      z-index: 100;
      background-size: cover;
      overflow: hidden;
      background: rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `;

const ConfigCard = styled(Card)`
      width: 600px;
      height: 600px;
      background: #717979;
      
    `;

const UsernameInput = styled(TextField)`
      width: 80%;
    `;

const StepContent = styled.div`
      margin-top: 150px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `;

const NextButton = styled(Button)`
    width: 80%;
    margin: 40px 20px 0 20px !important;
    `;

const SizeSlider = styled(Slider)`
      width: 60% !important;
    `;

const SliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    `;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    padding: 10px;
    `;

export default class GameConfig extends Component{
    state = {
        activeStep: 0,
        gameSize: 10
    }

    nextStep = () => {
        let currentStep = this.state.activeStep;
        currentStep++;
        this.setState({activeStep: currentStep});
    }

    prevStep = () => {
        let currentStep = this.state.activeStep;
        currentStep--;
        this.setState({activeStep: currentStep});
    }

    handleSliderChange = (event, newValue) => {
        this.setState({gameSize: newValue});
    }

    handleInputChange = (event) => {
        const newValue = event.target.value
        this.setState({gameSize: newValue});
    }

    enterUsername = (
        <StepContent>
            <UsernameInput id="outlined-basic" label="Username" variant="outlined"/>
            <NextButton variant="contained" color="primary" onClick={this.nextStep}>Next</NextButton>
        </StepContent>
    )

    gameSettings = (gameSize) => (
        <StepContent>
            <SliderContainer>
                <Typography id="label">Bord size</Typography>
                <SizeSlider
                    value={gameSize}
                    onChange={this.handleSliderChange}
                    aria-labelledby="label"/>
                <Input
                    value={gameSize}
                    onChange={this.handleInputChange}
                    inputProps={{
                        step: 1,
                        min: 10,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider'
                    }}
                />
            </SliderContainer>
            <ButtonContainer>
                <NextButton variant="contained" color="primary" onClick={this.prevStep}>Prev</NextButton>
                <NextButton variant="contained" color="primary" href="/game">Play</NextButton>
            </ButtonContainer>
        </StepContent>
    )

    getStep = (gameSize) => {
        switch (this.state.activeStep) {
            case 0:
                return this.enterUsername;
            case 1:
                return this.gameSettings(gameSize);
            default:
                return this.enterUsername;
        }
    }

    render() {
        const gameSize = this.state.gameSize;
        console.log(gameSize);
        return(
            <Wrapper>
                <ConfigCard>
                    <Stepper activeStep={gameSize}>
                        <Step key="Username">
                            <StepLabel>Enter username</StepLabel>
                        </Step>
                        <Step key="GameSettings">
                            <StepLabel>Game Settings</StepLabel>
                        </Step>
                    </Stepper>
                    {this.getStep(gameSize)}
                </ConfigCard>
            </Wrapper>
        )
    }
}
