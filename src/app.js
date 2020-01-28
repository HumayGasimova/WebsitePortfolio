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
import AboutPage from './components/Pages/AboutPage/aboutPage';
import SrvicesPage from './components/Pages/ServicesPage/servicesPage';
import PortfolioPage from './components/Pages/PortfolioPage/portfolioPage';
import PortfolioSinglePage from './components/Pages/PortfolioSinglePage/portfolioSinglePage';
import BlogPage from './components/Pages/BlogPage/blogPage';
import BlogSinglePage from './components/Pages/BlogSinglePage/blogSinglePage';
import ContactPage from './components/Pages/ContactPage/contactPage';

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
            <Route 
               exact 
               path="/contact"
               component={ ContactPage }
            />
            <Route 
               exact
               path="/blog"
               component={ BlogPage }
               
            />
            <Route 
               exact 
               path="/blogSingleId:id"
               component={ BlogSinglePage }
            />
            <Route 
               exact 
               path="/portfolio"
               component={ PortfolioPage }
            />
             <Route 
               exact 
               path="/portfolioSingleId:id"
               component={ PortfolioSinglePage }
            />
            <Route 
               exact
               path="/services"
               component={ SrvicesPage }
            />
            <Route 
               exact 
               path="/about"
               component={ AboutPage }
            />
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
