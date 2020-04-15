/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './ourStory.scss';

/**
* Components
*/

import Statistics from '../../Parts/Statistics/statistics'
import Stories from '../../Parts/Stories/stories';
import Footer from '../../Parts/Footer/footer';
import Gallery from '../../Parts/Gallery/gallery'

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    H1,
    H3,
    EH0,
    EH1,
    Line2
} from '../../UtilityComponents';

/**
* OurStory component definition and export
*/

export const OurStory = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <>
            <div className="our-story-cover-wrapper">
                <div className="our-story-wrapper-backgroud-div"/>
            </div>
            <div className="our-story-header-text">
                <H1 className="h1-center">OUR STORY</H1>
                <EH0/>
                <Line2/>
                <EH0/>
                <EH1/>
                <H3 className="h3-center">BORN FROM OUR LOVE OF GOOD COFFEE, COLD BEER AND FINE FOOD. IT'S BEEN QUITE A JOURNEY.</H3>
            </div>
            <div className="our-story-wrapper">
                <Stories/>
                <Statistics/>
                <Footer/>
            </div>
                {props.gallery.show ? <Gallery/> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            gallery: Selectors.getGalleryState(state)
        };
    }
)(OurStory);
 