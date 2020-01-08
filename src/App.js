import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import NavBar from './Components/NavBar';
import MediaCard from './Components/MediaCard';
import "./App.css";

import axios from 'axios';

const API_KEY = 'x1Rd70N8Pnpj3jeYhUqxIlrUNvN0BPgCVBgJ1qN1';
const DEMO_KEY = 'DEMO_KEY';
const BASE_APIS_URL  = 'https://api.nasa.gov/planetary/';
const DEFAULT_API_URL = `${BASE_APIS_URL}apod?api_key=${DEMO_KEY}`;

function App() {

  const [ data, setData ] = useState({})
  const [ nDate, setNDate ] = useState('1988-06-06');

  useEffect(() => {
    // axios.get(DEFAULT_API_URL).then(res => {
    //   setData(res.data);
    // }).catch(err => {
    //   console.error(err);
    // });
  });

  const theme = createMuiTheme({
    palette: {}
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar title="NPDay" _date={ nDate } />
        <Container>
          <MediaCard { ...data } />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
