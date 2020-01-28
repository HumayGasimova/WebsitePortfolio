/**
* Libraries
*/

import React,{
   Component
} from 'react';

import {
   Route
} from 'react-router-dom';

/**
* Components
*/

import Main from './components/main';

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
            {/* <Route 
               exact 
               path="/about"
               component={ AboutPage }
            /> */}
            <Route 
               exact
               path="/"
               component={ Main }
            />
         </div>
      );
   }
}

export default App;
