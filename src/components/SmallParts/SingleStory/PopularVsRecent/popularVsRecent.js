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
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Icons
*/

import { 
    faComments
} from '@fortawesome/free-regular-svg-icons';

/**
* Components
*/

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Styles
*/

import './popularVsRecent.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    H6,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1
} from '../../../UtilityComponents';

/**
* Images
*/


/**
* PopularVsRecent component definition and export
*/

export const PopularVsRecent = (props) => {

    /**
    * State
    */

    const [tabs, setTabs] = useState([
        {
            tabName: "POPULAR",
            icon: false,
            iconName: null,
            active: true,
            isHovering: false
        },
        {
            tabName: "RECENT",
            icon: false,
            iconName: null,
            active: false,
            isHovering: false
        },
        {
            tabName: null,
            icon: true,
            iconName: faComments,
            active: false,
            isHovering: false
        }
    ]);

    /**
    * Methods
    */

    const handleMouseEnter = (index) => {
        let updatedTabs = [...tabs];
        updatedTabs[index].isHovering = true;
        setTabs(updatedTabs);
    }

    const handleMouseLeave = (index) => {
        let updatedTabs = [...tabs];
        updatedTabs[index].isHovering = false;
        setTabs(updatedTabs);
    }

    const renderPopularVsRecentTabs = () => {
        return(
            <>{tabs.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className={el.active && el.isHovering ? "popular-vs-recent-tab-active-hover" : (el.active ? "popular-vs-recent-tab-active" : "popular-vs-recent-tab")}
                        onMouseEnter={() =>handleMouseEnter(i)} 
                        onMouseLeave={()=> handleMouseLeave(i)}
                    >
                        {!el.icon ? 
                            <H4>{el.tabName}</H4>:
                            <FontAwesomeIcon 
                                icon={el.iconName} 
                                size="lg" 
                                color="rgb(180, 139, 62)"
                                // onClick={() => iconOnClick(el.name, props.linkFacebook)}
                            />
                        }
                    </div>
                )
            })}</>
        )
    }

    const renderPopularVsRecentStories = () => {

    }

    /**
    * Markup
    */

    return(
        <div className="popular-vs-recent">
           <div className="popular-vs-recent-tabs-wrapper">
               {renderPopularVsRecentTabs()}
           </div>
           {renderPopularVsRecentStories()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // relatedPosts: Selectors.getRelatedPostsState(state),
        };
    },
    (dispatch) => {
        return {
            // startInitRelatedPosts: bindActionCreators(Actions.startInitRelatedPosts, dispatch),
        };
    }
)(PopularVsRecent);
 