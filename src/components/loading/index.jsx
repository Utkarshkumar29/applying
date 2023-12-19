import React from "react";
import { Circle1, Circle2, Circle3, Circle4, LoadingContainer, LoadingWrapper } from "../../styles/loading";

const Loading=()=>{
    return(
        <LoadingContainer>
            <LoadingWrapper>
                <Circle1/>
                <Circle2/>
                <Circle3/>
                <Circle4/>
            </LoadingWrapper>
        </LoadingContainer>
    )
}

export default Loading