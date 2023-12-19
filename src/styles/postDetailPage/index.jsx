import styled from "styled-components";

export const PostDetailContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
    display: flex;
`

export const PostDetailWrapper=styled.div`
    display: flex;
    flex-direction: column;
`

export const PostTitle = styled.h1`
    font-size: 45px;
    margin-bottom: 10px;
    color: #333;
    padding-left: 20px;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 1px; 
`

export const PostDetails = styled.div`
    color: #666;
    padding-left: 20px;

    &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #333;
        display: block;
        margin-top: 10px;
    }
`

export const CommentsSection = styled.div`

`

export const CommentsContainer = styled.div`
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const CommentHeader = styled.h2`
    font-size: 24px;
    margin-bottom: 15px;
    color: #333;
    padding-left: 20px;
    position: relative;
    top: 20px;
`
