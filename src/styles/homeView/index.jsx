import styled from "styled-components";
import imgUrl from '../../assets/download.png'

export const HomeViewContainer=styled.div`
    max-width: 1200px;
    width: 100%;
    min-height:400px;
    height: 100%;
`

export const HomeViewWrapper=styled.div`
    
    background: url(${imgUrl}) center/cover no-repeat;
    padding: 20px;
    margin: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #222831;

    p:nth-child(1) {
        position: relative;
        top: 40px;
        font-size: 30px;

        @media (max-width:950px) {
            font-size: 25px;
        }
    } 

    p:nth-child(2) {
        font-size: 65px;
        line-height: 70px;
        position: relative;
        top: 0px;

        @media (max-width:950px) {
            font-size: 55px;
        }
    }
`