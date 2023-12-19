    import React, { useEffect, useState } from "react";
    import axios from 'axios'
    import {Link} from 'react-router-dom'
    import { Author, FrontCard, FrontContainer, FrontStoriesWrapper, FrontWrapper, ReadMore, Title } from "../../styles/homeScreen";

    const HomeScreen=()=>{
        const [front,setFront]=useState([])

        useEffect(()=>{
            const fetchData=async()=>{
                try
                {
                    const response=await axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`)
                    const data=response.data
                    setFront(data.hits)
                    console.log(data.hits)
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            fetchData()
        },[])

        return(
            <FrontContainer>
                <FrontWrapper>

                    <FrontStoriesWrapper>
                    {front.map((item,index)=>{
                        return(
                            <Link to={`/details/${item.objectID}`}  key={index} style={{textDecoration:"none"}}>
                            <FrontCard>
                                <Title>{item.title}</Title>
                                <Author>Author: {item.author}</Author>
                                <ReadMore>Read More</ReadMore>
                            </FrontCard>
                            </Link>
                        )
                    })}
                    </FrontStoriesWrapper>
                </FrontWrapper>
            </FrontContainer>
        )
    }

    export default HomeScreen
