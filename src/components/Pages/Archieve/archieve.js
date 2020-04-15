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

/**
* Styles
*/

import './archieve.scss';

/**
* Components
*/

import ArchievesMonth from '../../Parts/ArchievesMonth/archievesMonth';
import Footer from '../../Parts/Footer/footer';
import Gallery from '../../Parts/Gallery/gallery';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Utility
*/

import {
    H1,
    H4,
    EH1
} from '../../UtilityComponents';

/**
* Archieve component definition and export
*/

export const Archieve = (props) => {

    /**
    * Methods
    */

    useEffect(()=>{
        if(props.location.state){

            let archieveImages = props.location.state.obj.storiesArray.map((el, i) => {
                return el
            });
            
            props.addGalleryImages([], 'clear');
            props.initArchievesMonth(props.location.state.obj);
            props.addGalleryImages(archieveImages, 'Archieve');
        }
        
        window.scrollTo(0, 0);
    }, []);

    /**
    * Markup
    */

    return(
        <>
            <div className="archieve-cover-wrapper">
                <div className="archieve-wrapper-backgroud-div"/>
            </div>
            <div className="archieve-header-text">
                <H1 className="h1-center">{`MONTHLY ARCHIVIES: ${props.archievesMonth.header}`}</H1>
                <EH1/>
                <H4 className="h4-white-centered">
                    {`Home / 
                    ${props.archievesMonth.path ? props.archievesMonth.path.slice(0, props.archievesMonth.path.indexOf('/')): null} /  
                    ${props.archievesMonth.path ? props.archievesMonth.path.slice(props.archievesMonth.path.indexOf('/') + 1, props.archievesMonth.path.length) : null}`}
                </H4>
            </div>
            <div className="archieve-wrapper">
               <ArchievesMonth/>
               <Footer/>
            </div>
            {props.gallery.show ? <Gallery/> : null}
        </>
    );
}

export default connect(
    (state) => {
        return {
            archievesMonth: Selectors.getArchievesMonthState(state),
            gallery: Selectors.getGalleryState(state)
        };
    },
    (dispatch) => {
        return {
            initArchievesMonth: bindActionCreators(Actions.initArchievesMonth, dispatch),
            addGalleryImages: bindActionCreators(Actions.addGalleryImages, dispatch)
        };
    }
)(Archieve);
 