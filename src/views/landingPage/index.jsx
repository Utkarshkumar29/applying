import React from "react";
import HomeScreen from "../../components/homeScreen";
import Header from "../../components/header";
import { LandingPageContainer } from "../../styles/landingPage";

const LandingPage=()=>{
    return(
        <LandingPageContainer>
            <Header/>
            <HomeScreen/>
        </LandingPageContainer>
    )
}

export default LandingPage