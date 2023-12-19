import styled from 'styled-components';

export const FrontContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    z-index: 1; 
`

export const FrontWrapper=styled.div`

`

export const FrontStoriesWrapper=styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    z-index: -1;
`;

export const FrontCard=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 160px;
    padding: 20px;
    background-color: white;
    color: black;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2), 0 8px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }

    @media (max-width:860px)
    {
        width: 180px;
    }
`

export const Title=styled.h3`
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #393E46;

    &::after{
        content: "";
        width: 200px;
        height: 1px;
        background-color: #393E46;
        display: block;
        margin-top: 4px;

        @media screen {
            width: 180px;
        }
    }

    @media (max-width:860px)
    {
        width: 180px;
    }
`

export const Author=styled.div`
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 10px;
`

export const ReadMore=styled.button`
    margin-top: auto; 
    padding: 8px 16px;
    background-color: #00ADB5;
    color: #EEEEEE;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #222831;
    }
`