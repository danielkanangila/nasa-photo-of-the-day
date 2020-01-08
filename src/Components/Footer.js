import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: block;
    margin: 30px 0;
    font-size: 0.9rem;
    text-align: center;
    color: rgba(0,0,0,0.8);
`;
const Footer =  props => {
    return(
        <FooterContainer>
            <p>
                Copyright &copy; NasaFun - 2020
            </p>
        </FooterContainer>
    );
}

export default Footer;