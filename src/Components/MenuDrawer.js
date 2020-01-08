import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Divider from '@material-ui/core/Divider';
import Logo from './Logo';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});


const MenuDrawer = props => {
    const classes = useStyles();
    const { side, toggleDrawer, appName } = props;
    
    const list = (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Picture of Day'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><ImageSearchIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );

    return(
        <Drawer open={ side.left } onClose={toggleDrawer(side, false)}>
            <Logo from="drawer" appName={appName} />
            <Divider />
            {list}
        </Drawer>
    );
}

export default MenuDrawer