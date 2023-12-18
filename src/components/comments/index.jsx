import React from "react";

const Comment = ({ comment }) => {
    const commentStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
      };
    
      return (
        <div style={commentStyle} key={comment.id}>
          <p>{comment.text}</p>
            <div style={{ marginLeft: '20px' }}>
              {comment.children.map((child) => (
                <Comment key={child.id} comment={child} />
              ))}
            </div>
        </div>
      );
};
  
  export default Comment;