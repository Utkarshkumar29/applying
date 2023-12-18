    import React, { useEffect, useState } from "react";
    import axios from 'axios'
    import {Link} from 'react-router-dom'
    import { FrontCard, FrontContainer, FrontStoriesWrapper, FrontWrapper, Queries, QueryContainer, QueryInput, QueryWrapper, ReadMore, Title } from "../../styles/homeScreen";

    const HomeScreen=()=>{
        const [query,setQuery]=useState([])
        const [front,setFront]=useState([])

        const handleChange=async(e)=>{
            try {
                const searchQuery=e.target.value
                if (searchQuery.trim() === '') {
                    setQuery([]);
                    return;
                  }
                const response=await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
                const data=response.data
                setQuery(data.hits)
            } catch (error) {
                    console.log("Error:",error)
            }
        }

        useEffect(()=>{
            const fetchData=async()=>{
                const response=await axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`)
                const data=response.data
                setFront(data.hits)
                console.log(data.hits)
            }
            fetchData()
        },[])

        return(
            <FrontContainer>
                <FrontWrapper>
                    <QueryContainer>
                        <QueryInput type="text" onChange={handleChange} placeholder="Enter the query"/>
                        <QueryWrapper>
                        {query.slice(0,5).map((item,index)=>{
                            return(
                                <Link to={`/details/${item.objectID}`}  key={index}>
                                <Queries>
                                    <div>{item.title}</div>
                                </Queries>
                                </Link>
                            )
                        })}
                        </QueryWrapper>
                    </QueryContainer>

                    <FrontStoriesWrapper>
                    {front.map((item,index)=>{
                        return(
                            <Link to={`/details/${item.objectID}`}  key={index} style={{textDecoration:"none"}}>
                            <FrontCard>
                                <Title>{item.title}</Title>
                                <div>{item.created_at}</div>
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
