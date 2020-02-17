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

import Statistics from '../../Parts/Statistics/statistics'
import Stories from '../../Parts/Stories/stories';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Background from '../../../images/700_FO36064926_7b9fb5c531d9ef758ada11137a039fa4.jpg';

/**
* Utility
*/

import {
    H1,
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EW1,
    Line1,
    Line2
} from '../../UtilityComponents';

/**
* Archieve component definition and export
*/

export const Archieve = (props) => {

    /**
    * Methods
    */

    useEffect(()=>{
        props.initArchievesMonth(props.location.state ? props.location.state.obj : {});
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
                <H1 className="h1-center">{`MONTHLY ARCHIVIES: ${props.archievesMonth.text}`}</H1>
                <EH1/>
                <H4 className="h4-white-centered">
                    {`Home / 
                    ${props.archievesMonth.path ? props.archievesMonth.path.slice(0, props.archievesMonth.path.indexOf('/')): null} /  
                    ${props.archievesMonth.path ? props.archievesMonth.path.slice(props.archievesMonth.path.indexOf('/') + 1, props.archievesMonth.path.length) : null}`}
                </H4>
            </div>
            <div className="archieve-wrapper">
               {/* <ArchieveMonth/> */}
            </div>
        </>
    );
}

export default connect(
    (state) => {
        return {
            archievesMonth: Selectors.getArchievesMonthState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            initArchievesMonth: bindActionCreators(Actions.initArchievesMonth, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Archieve);
 