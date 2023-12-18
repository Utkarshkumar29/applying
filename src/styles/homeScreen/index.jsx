import styled from 'styled-components';

export const FrontContainer = styled.div`
    max-width: 2600px;
    width: 100%;
    position: relative;
    z-index: 1; 
`;

export const FrontWrapper = styled.div`
    position: relative;
    top: -100px;
`;

export const QueryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -20px;
`;

export const QueryWrapper=styled.div`
    position: absolute;
    top: 32px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Queries = styled.div` 
    position: absolute;
    left: -270px;
    width: 500px;
    height: 40px;
    padding: 20px;
    background-color: #C5CBE3;
    transition: all 0.3s ease;
    z-index: 100;

    &::after{
        content: "";
        border: 2px solid black;
    }
`;

export const QueryInput = styled.input`
    display: flex;
    border: none;
    border-bottom: 0.2em solid #E91E63;
    background: rgba(#E91E63, 0.2);
    border-radius: 0.2em 0.2em 0 0;
    padding: 0.4em;
    color: #E91E63;
    width: 500px;
`;

export const FrontStoriesWrapper = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    z-index: -1;
`;

export const FrontCard = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  padding: 20px;
  color: black;
  transition: box-shadow 0.3s ease;
  background-color: white;
  border: 1px solid #ddd;

  &:hover {
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2), 0 8px 10px rgba(0, 0, 0, 0.1); /* Adjusted box shadow on hover */
  }
`;


export const Title = styled.div`
    position: relative;
    font-weight: 600;
    margin-bottom: 10px;

    &::after {
        content: '';
        display: block;
        height: 1px;
        background: #333;
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
    }
`;

export const ReadMore = styled.p`
    color: blue;
    cursor: pointer;
    margin-top: 10px;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: darkblue;
    }
`;
