import React, { useState, useEffect } from "react";
import { format, isToday } from 'date-fns';
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import NavBar from './Components/NavBar';
import MediaCard from './Components/MediaCard';
import "./App.css";

import axios from 'axios';

const API_KEY = 'x1Rd70N8Pnpj3jeYhUqxIlrUNvN0BPgCVBgJ1qN1';
const DEMO_KEY = 'DEMO_KEY';
const BASE_APIS_URL  = 'https://api.nasa.gov/planetary/';
const DEFAULT_API_URL = `${BASE_APIS_URL}apod?api_key=${API_KEY}`;
const APP_NAME = 'NasaFun'

function App() {

  const [ data, setData ] = useState({})
  const [ selectedDate, setSelectedDate ] = useState(format(new Date(), 'yyyy-MM-dd'));

  useEffect(() => {
    fetchData();
    return []
  }, []);

  const fetchData = () => {
    axios.get(`${DEFAULT_API_URL}&date=${selectedDate}`).then(res => {
      setData(res.data);
    }).catch(err => {
      console.error(err);
    })
  }

  const theme = createMuiTheme({
    palette: {}
  });

  const handleDateChange = date => {

      setSelectedDate(format(date, 'yyyy-MM-dd'));
      fetchData();
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar 
          appName={ APP_NAME }
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}  />
        <Container>
          <MediaCard { ...data } />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
