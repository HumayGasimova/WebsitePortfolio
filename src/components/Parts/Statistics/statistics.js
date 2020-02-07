/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './statistics.scss';

/**
* Components
*/

import StatisticsItem from '../../SmallParts/StatisticsItem/statisticsItem';
// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    statisticsArray
} from '../../../constants/statisticsArray';


/**
* Statistics component definition and export
*/

export const Statistics = (props) => {

    /**
    * State
    */

    const [showComponent, setShowComponent] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("statistics");
      
        if(scrollHeight >= el.offsetTop - window.innerHeight/2 + 400){
            // console.log(el.offsetTop - window.innerHeight/2 + 400, scrollHeight)
            setShowComponent(true);
        }
    }

    const renderStatisticsItems = () => {
        return(
            <div className="statistics-items">
                {statisticsArray.map((el,i) => {
                    return(
                        <StatisticsItem
                            key={i}
                            icon={el.icon}
                            number={el.number}
                            header={el.header}
                        />
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div 
            className="statistics"
            id="statistics"
        >
            {showComponent ? renderStatisticsItems() : null}
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(Statistics);
 