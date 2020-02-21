/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
 } from 'react-router-dom';

/**
* Styles
*/

import './main.scss';

/**
* Components
*/

import Toolbar from './Parts/Toolbar/toolbar';
import Sidebar from './Parts/Sidebar/sidebar';
import Home from './Pages/Home/home';
import AboutUs from './Pages/AboutUs/aboutUs';
import FoodAndDrink from './Pages/FoodAndDrink/foodAndDrink';
import OurStory from './Pages/OurStory/ourStory';
import Locations from './Pages/Locations/locations';
import SingleStory from './Pages/SingleStory/singleStory';
import Archieve from './Pages/Archieve/archieve';
import Category from './Pages/Category/category';



/**
* Actions
*/

import * as Actions from '../actions';

/**
* Selectors
*/

import * as Selectors from '../reducers/selectors';

/**
* Constants
*/

import {
    storiesArray
} from '../constants/storiesArray';

/**
* Main component definition and export
*/

export const Main = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        let path = props.location.pathname.slice(13);
        let storyObj = {};
        let archievesMonthObj = {};
        let id;
        switch(path){
            case '':
                id = 1;
                break;
            case 'about-us':
                id = 2;
                break;
            case 'food-and-drink':
                id = 3;
                break;
            case 'our-story':
                id = 4;
                break;
            case 'locations':
                id = 5;
                break;
            case 'contact':
                id = 6;
                break;
            default:
                id = null;
                break;
        }
        props.activateMenuItem(id);
        storiesArray.map(el => {
            storyObj = el.storiesArray.find(x => x.path === path);
            // console.log(storyObj)
            if(storyObj){
                props.initSingleStory(storyObj);
            }
        });
        props.startInitArchieves(path);
        props.startInitCategories(path);
        props.startInitRecentPosts()
    }, [])

    /**
    * Markup
    */

    return(
        <div className="main">
            <Toolbar/>
            <Sidebar/>
            <Switch>
                <Route 
                    exact 
                    path={props.match.url + "/category/specials"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/category/openning"}
                    component={Category}
                />
                 <Route 
                    exact 
                    path={props.match.url + "/category/lunch"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/category/featured"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/category/dinner"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/category/coffee"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/category/brunch"}
                    component={Category}
                />
                <Route 
                    exact 
                    path={props.match.url + "/2020/February"}
                    component={Archieve}
                />
                <Route 
                    exact 
                    path={props.match.url + "/2020/January"}
                    component={Archieve}
                />
                <Route 
                    exact 
                    path={props.match.url + "/london-opening"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/sydney-opening"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/pacific-opening"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/exclusive-coffee"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/million-visits"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/new-york-opening"}
                    component={SingleStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/locations"}
                    component={Locations}
                />
                <Route 
                    exact 
                    path={props.match.url + "/our-story"}
                    component={OurStory}
                />
                <Route 
                    exact 
                    path={props.match.url + "/food-and-drink"}
                    component={FoodAndDrink}
                />
                <Route 
                    exact 
                    path={props.match.url + "/about-us"}
                    component={AboutUs}
                />
                <Route 
                    exact 
                    path={props.match.url + ""}
                    component={Home}
                />
            </Switch>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            archievesMonths: Selectors.getArchievesMonthState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
            startInitStories: bindActionCreators(Actions.startInitStories, dispatch),
            initSingleStory: bindActionCreators(Actions.initSingleStory, dispatch),
            startInitArchieves: bindActionCreators(Actions.startInitArchieves, dispatch),
            startInitCategories: bindActionCreators(Actions.startInitCategories, dispatch),
            startInitRecentPosts: bindActionCreators(Actions.startInitRecentPosts, dispatch),
        };
    }
)(Main);
 