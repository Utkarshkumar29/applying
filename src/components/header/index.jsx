import React, { useState } from "react";
import { HeaderContainer, Headerwrapper, HeadingWrapper, Innerdiv, LoginText, LoginWrapper, Outerdiv, Queries, QueryInput, QueryWrapper, TraingleText, Triangle, UserIcon } from "../../styles/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Header=()=>{
    const [query,setQuery]=useState([])
    const [search,setSearch]=useState(false)

    const handleChange = async (e) => {
        try 
        {
            const searchQuery = e.target.value.trim();
      
            if (searchQuery === '')
            {
                setQuery([]);
                return;
            } 
      
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
            const data = response.data;
            setQuery(data.hits);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
    }

    return(
        <HeaderContainer>
            <Headerwrapper>

                <Triangle>
                    <TraingleText>Lorem, ipsum.</TraingleText>
                </Triangle>
                
                <HeadingWrapper>                    
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <div onClick={()=>{setSearch(!search)}}><FontAwesomeIcon icon={faSearch} /></div>
                        {search && (
                            <QueryInput type="text" onChange={handleChange} placeholder="Enter the query"/>
                        )}
                </HeadingWrapper>

                <LoginWrapper>
                    <Innerdiv>
                        <LoginText>LogIn</LoginText>
                        <UserIcon><FontAwesomeIcon icon={faUser}/></UserIcon>
                    </Innerdiv>
                    <Outerdiv></Outerdiv>
                </LoginWrapper>

                {search && query.length > 0 && (
                    <QueryWrapper>
                        {query.slice(0,5).map((item,index)=>{
                            return(
                                <Link to={`/details/${item.objectID}`}  key={index} style={{textDecoration:"none"}}>
                                    <Queries>
                                        <div>{item.title}</div>
                                    </Queries>
                                </Link>
                            )
                        })}
                    </QueryWrapper>
                )}

            </Headerwrapper>
        </HeaderContainer>
    )
}

export default Header