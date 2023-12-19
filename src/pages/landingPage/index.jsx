import React from "react";
import HomeScreen from "../../views/homeScreen";
import Header from "../../components/header";
import { LandingPageContainer } from "../../styles/landingPage";
import HomeView from '../../views/homeView'
import Footer from '../../components/footer'

const LandingPage=()=>{
    return(
        <LandingPageContainer>
            <Header/>
            <HomeView/>
            <HomeScreen/>
            <Footer/>
        </LandingPageContainer>
    )
}

export default LandingPage