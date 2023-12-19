import styled from 'styled-components'

export const HeaderContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    min-height: 70px;
    height: 100%;
`

export const Headerwrapper=styled.div`
    display: flex;
    flex-direction: row;
`

export const Triangle=styled.div`
    width: 0px;
    height: 0px;
    border-style: inset;
    border-color: #393E46 transparent transparent #393E46;
    border-width: 80px 80px 80px 80px;
`

export const TraingleText=styled.p`
    position: relative;
    top: -70px;
    left: -55px;
    color: #00ADB5;
    font-weight: 800;
    font-family: cursive;
`

export const HeadingWrapper=styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 50px;
    font-size: 20px;
    font-weight: 600;
    color: #323232;
    align-items: center;

    @media (max-width:1000px)
    {
        gap: 15px;
        position: relative;
        left: -50px;
    }

    p {
        cursor: pointer;
        position: relative;
        transition: color 0.3s ease; 

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px; 
            background-color: #00ADB5; 
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease;
        }

        &:hover::after {
            transform: scaleX(1);
        }

        &:hover {
            color: #00ADB5;
        }
    }
`

export const QueryContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -20px;
    z-index: 15;
`

export const Box=styled.div`
    position: absolute;
    top: 100px;
    left: 768px;
    width: 470px;
    height: 100px;
    background-color: red;
`

export const QueryWrapper=styled.div`
    position: absolute;
    top: 100px;
    left: 568px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 20px;
    z-index: 100;
    width: 470px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s ease;
    margin-right: 100px;
`

export const Queries=styled.div` 
    display: flex;
    border: none;
    outline: none;
    border-bottom: 0.2em solid #00ADB5;
    background: rgba(#E91E63, 0.2);
    border-radius: 0.2em 0.2em 0 0;
    color: rgb(50, 50, 50);
    max-width: 500px;
    width: 100%;
    animation: slide 1s ease-in-out forwards;

    &:hover {
        color: #00ADB5;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 14px;
    }
`

export const QueryInput=styled.input`
    display: flex;
    border: none;
    outline: none;
    border-bottom: 0.2em solid #00ADB5;
    background: rgba(#E91E63, 0.2);
    border-radius: 0.2em 0.2em 0 0;
    padding: 0.4em;
    color: rgb(50, 50, 50);
    max-width: 500px;
    width: 100%;
    animation: slide 1s ease-in-out forwards;

    @keyframes slide {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
`

export const LoginWrapper=styled.div`
    display: flex;
    flex-direction: column;
    animation: out 1s ease-in-out 1s infinite;
    padding-left: 100px;
    margin-right: 15px;

    @keyframes out {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.2);
        }
        100%{
            transform: scale(1);
        }
    }
`

export const Innerdiv=styled.div`
    color: #00ADB5;
    align-items: center;
    justify-content: center;
    background-color: #1b1f24;
    padding: 20px;
    height: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100px;
`

export const LoginText=styled.p`
    position: relative;
    top: 15px;
`

export const UserIcon=styled.p`
    position: relative;
    top: 15px;
`

export const Outerdiv=styled.div`
    height: 40px;
    background-color: #1b1f24;
    width: 140px;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
    position: relative;
    top: -1px;
`