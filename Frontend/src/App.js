import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,

  Route,
} from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen"
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <Router>

      <Header />


      <Route exact path="/" component={MainScreen} />
      <Route exact path="/login" component={LoginScreen} />



      <Footer />
    </Router>

  );
}

export default App;
