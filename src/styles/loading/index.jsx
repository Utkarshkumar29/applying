import styled from "styled-components";

export const LoadingContainer = styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
`

export const LoadingWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100px;
    height: 100px;

    @keyframes move {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

export const Circle1=styled.div`
    border: 2px solid blue;
    width: 70px;
    height: 70px;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 50%;
    animation: move 2s linear infinite reverse;
`

export const Circle2=styled.div`
    border: 2px solid blue;
    width: 60px;
    height: 60px;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    position: absolute;
    top: 7px;
    left: 10px;
    border-radius: 50%;
    animation: move 2s linear infinite;
`

export const Circle3 = styled.div`
    border: 2px solid blue;
    width: 50px;
    height: 50px;
    clip-path: polygon(100% 0, 100% 100%, 0 0);
    position: absolute;
    top: 12px;
    left: 15px;
    border-radius: 50%;
    animation: move 2s linear infinite reverse;
`

export const Circle4=styled.div`
    border: 2px solid blue;
    width: 40px;
    height: 40px;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    position: absolute;
    top: 17px;
    left: 20px;
    border-radius: 50%;
    animation: move 2s linear infinite;
`
