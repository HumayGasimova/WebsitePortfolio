/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

/**
* Components
*/

import Main from './components/main';
import AboutUs from './components/Pages/AboutUs/aboutUs';
import Carousel from './library/Carousel/carousel';

/**
* Styles
*/

import './app.scss';


/**
* App component definition and export
*/

export class App extends Component {

   /**
   * Markup
   */

   render(){
      return(
         <div className="app">
            <Switch>
               <Route 
                  path="/crypto-cafe"
                  component={ Carousel }
               />
               <Redirect exact from="/" to="/crypto-cafe"/>
            </Switch>
         </div>
      );
   }
}

export default App;
