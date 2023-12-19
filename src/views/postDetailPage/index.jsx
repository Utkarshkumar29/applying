import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CommentHeader, CommentsContainer, CommentsSection, PostDetailContainer, PostDetailWrapper, PostDetails, PostTitle } from "../../styles/postDetailPage";
import Header from '../../components/header'
import Comment from '../../components/comments'
import Loading from "../../components/loading";
import Footer from '../../components/footer'

const PostDetailPage=()=>{
    const {id}=useParams()
    console.log(id)
    const [details,setDetails]=useState([])
    const [children,setChildren]=useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`);
                const data =await response.data
                console.log(data)
                setDetails(data)
                setChildren(data.children)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        };

        fetchData()
    },[id])

    return(
        <div>
            {loading ? (
                <Loading/>
            ):(
                <PostDetailContainer>
            <PostDetailWrapper>

                <Header/>

                <div style={{color:"red"}}>
                    <PostTitle>{details.title}</PostTitle>
                    <PostDetails>Points:{details.points}</PostDetails>
                </div>

                <CommentsSection>
                    <CommentHeader>Comments</CommentHeader>
                    <CommentsContainer style={{padding:"20px"}}>
                        {children.map((item,index)=>{
                            return(
                                <Comment key={index} comment={item}/>
                            )
                        })}
                    </CommentsContainer>
                </CommentsSection>

                <Footer/>

            </PostDetailWrapper>
        </PostDetailContainer>
            )}
        </div>
    )
}

export default PostDetailPage
