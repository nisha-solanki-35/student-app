// import logo from './logo.svg';
import React from "react";
import './App.css';
import Routes from "./routes/index";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {

  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App;

// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>