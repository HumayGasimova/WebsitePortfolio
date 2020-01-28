/**
* Libraries
*/

import React, {
    useEffect,
    useState
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

/**
* Styles
*/

import './customerFeedbacks2.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Components
*/

import Feedbacks from '../../SmallParts/Feedbacks/feedbacks';
import Button from '../../../library/Button/button';

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/**
* Constants
*/

import {
    feedbacksArray
} from '../../../constants/feedbacks';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* CustomerFeedbacks2 component definition and export
*/

export const CustomerFeedbacks2 = (props) => {
    
    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        let feedbacks = feedbacksArray.slice(0, 3);
        props.initFeedbacks(feedbacksArray, feedbacksArray);
    }, [])

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    /**
    * Markup
    */

    return(
        <div className="customer-feedbacks" >
            <div className="customer-feedbacks-paragraph">
                <div className="customer-feedbacks-text-line1">CUSTOMER SAYS</div>
                <div className="customer-feedbacks-text-line2">Our satisfied customer says</div>
                <div className="customer-feedbacks-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            <div 
                className="customer-feedbacks-section"
                onMouseLeave={handleMouseLeave} 
                onMouseEnter={handleMouseEnter} 
            >
                {isHovering ? 
                    <Button 
                        className={"customer-feedbacks-button"}
                        onClick={props.leftArrowOnClick}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size="2x" className="icon-arrow-left"/>
                    </Button> : null}
                <Feedbacks feedbacks={props.feedbacksToShow}/>
                {isHovering ? 
                    <Button 
                        className={"customer-feedbacks-button"}
                        onClick={props.rightArrowOnClick}
                    >
                        <FontAwesomeIcon icon={faChevronRight} size="2x" className="icon-arrow-right"/>
                    </Button> : null}
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            feedbacksToShow: Selectors.getFeedbacksToShowState(state),
        };
    },
    (dispatch) => {
        return {
            initFeedbacks: bindActionCreators(Actions.initFeedbacks, dispatch),
            leftArrowOnClick: bindActionCreators(Actions.leftArrowOnClick, dispatch),
            rightArrowOnClick: bindActionCreators(Actions.rightArrowOnClick, dispatch),
        };
    }
)(CustomerFeedbacks2);
 