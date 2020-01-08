import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import DatePicker from './DatePicker';
import Logo from './Logo';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'Anton',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderBottom: `1px solid ${fade(theme.palette.common.black, 0.15)}`,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    color: fade(theme.palette.common.black, 0.25),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const NavBar = props => {
  const [side, setSide] = useState({left: false});
  const { appName, handleDateChange, selectedDate } = props
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSide({[side]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <Logo />
              { appName }
            </Typography>
            <div className={classes.search}>
              {/*
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

                <InputBase
                  onChange={ handleChange }
                  onKeyDown={ keyPress }
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              */}
              <DatePicker 
                handleDateChange={handleDateChange}
                selectedDate={selectedDate} />
            </div>
          </Toolbar>
        </Container>
        <MenuDrawer side={side} toggleDrawer={toggleDrawer} />
      </AppBar>
    </div>
  );
}


export default NavBar;