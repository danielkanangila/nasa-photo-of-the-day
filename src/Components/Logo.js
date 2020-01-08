import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 50px;
    vertical-align: middle;
`
const Logo = props => {

    return <Img src="/favicon-192.png" alt="Nasa" />
}

export default Logo;