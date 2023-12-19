import styled from "styled-components";

export const CommentsContainer = styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
`

export const CommentsWrapper = styled.div`
    border-style: solid;
    border-color: #00ADB5;
    border-width: 2px 2px 2px 10px; 
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Fold = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #4056a1;
    transition: color 0.3s;

    &:hover {
        color: #2d3a63;
    }
`

export const ReplyCount = styled.p`
    margin: 0;
    color: #888;
`

export const CommentText = styled.p`
    margin-top: 10px;
    color: #333;
    font-size: 16px;
    white-space: pre-line;
    max-width: 100%;
`

export const ChildCommentsContainer = styled.div`
    margin-left: 20px;
`