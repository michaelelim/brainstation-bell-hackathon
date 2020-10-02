import React from 'react';
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import './styles/styles.scss';
import musicians from "./assets/Images/aboutthemusicians.jpg";
import stats1 from "./assets/Images/Stats-1.png";
import stats2 from "./assets/Images/Stats-2.png";
import stats3 from "./assets/Images/Stats-3.png";
import photo1 from "./assets/Images/Photo-gallery-1.png";
import photo2 from "./assets/Images/Photo-gallery-2.png";
import photo3 from "./assets/Images/Photo-gallery-3.png";
import photo4 from "./assets/Images/Photo-gallery-4.png";
// import photo5 from "./assets/Images/Photo-gallery-5.jpg";
// import photo6 from "./assets/Images/Photo-gallery-6.jpg";
// import photo7 from "./assets/Images/Photo-gallery-7.jpg";
// import photo8 from "./assets/Images/Photo-gallery-8.jpg";
// import photo9 from "./assets/Images/Photo-gallery-9.jpg";

class App extends React.Component {
  render () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home/></Route>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
