import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import NavBar from './Components/NavBar';
import "./App.css";

function App() {

  const [ nDate, setNDate ] = useState('1988-06-06');

  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });
  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <NavBar title="NPDay" _date={ nDate } />
        <Container>
          <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun 🚀!
          </p>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
