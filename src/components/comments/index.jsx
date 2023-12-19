import React, { useState } from "react";
import { ChildCommentsContainer, CommentText, CommentsContainer, CommentsWrapper, Fold, ReplyCount } from "../../styles/comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ comment }) => {    
    const [fold,setFold]=useState(false)
    console.log(comment)

      return (
        <CommentsContainer>
            <CommentsWrapper>
                <Fold><FontAwesomeIcon icon={fold? faArrowUp:faArrowDown} onClick={()=>{setFold(!fold)}}/><ReplyCount>{comment.children.length} replies</ReplyCount></Fold>
		        <CommentText>{comment.text}</CommentText>
                
                <ChildCommentsContainer>
                {fold && (
                    <>
                    {comment.children.map((child,index) => (
                        <Comment key={index} comment={child} />
                    ))}
                    </>
                )} 
                </ChildCommentsContainer>
			</CommentsWrapper> 
		</CommentsContainer>
      );
};
  
  export default Comment;
  