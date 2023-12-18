import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../comments";

const PostDetailPage=()=>{
    const {id}=useParams()
    console.log(id)
    const [details,setDetails]=useState([])
    const [children,setChildren]=useState([])
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`);
                const data =await response.data
                console.log(data)
                setDetails(data)
                setChildren(data.children)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        };

        fetchData()
    },[id])

    return(
        <div>
            <div style={{color:"red"}}>
            <h1>{details.title}</h1>
            <h1>{details.points}</h1>
            </div>

            <h2>Comments</h2>
            {children.map((item,index)=>{
                return(
                    <Comment key={item.id} comment={item} />
                )
            })}
        </div>
    )
}

export default PostDetailPage