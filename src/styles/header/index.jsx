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
    border-color: #4056A1 transparent transparent #4056A1;
    border-width: 80px 80px 80px 80px;
`

export const TraingleText=styled.p`
    position: relative;
    top: -70px;
    left: -55px;
    color: #D79922;
    font-weight: 800;
    font-family: cursive;
`