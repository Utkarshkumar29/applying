import React from "react";
import { FooterContainer, FooterWrapper } from "../../styles/footer";

const Footer=()=>{
    return(
        <FooterContainer>
            <FooterWrapper>
                <p>Contact: <a href="mailto:ukyp2014@gmail.com">ukyp2014@gmail.com</a></p>
                <p>Version 1.0.0</p>
                <p>&copy; 2023 Your Company Name. All rights reserved. | <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a></p>
            </FooterWrapper>
        </FooterContainer>
    )
}
    
export default Footer