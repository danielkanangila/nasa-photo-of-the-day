import React from 'react';
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const useStyles = makeStyles({
    title: {
        fontFamily: 'Anton',
    },
    container: {
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        fontFamily: 'Anton',
    }
})

const Img = styled.img`
    width: 50px;
    vertical-align: middle;
`
const Logo = props => {
    const classes = useStyles();
    const { appName, from } = props;
    return (
        <Typography className={(from === 'drawer') ? classes.container : classes.title} variant="h6" noWrap>
              <Img src="/favicon-192.png" alt="Nasa" />
              { appName }
        </Typography>
    )
}

export default Logo;