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
* Icons
*/

import { 
    faCalendarAlt,
    faUser,
    faCommentAlt
} from '@fortawesome/free-solid-svg-icons'

/**
* Styles
*/

import './recentBlogCard.scss';

/**
* Components
*/

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Pic1 from '../../../images/coffee-cafe-table-food.jpg';
import Pic2 from '../../../images/notebook-laptop-camera-diary-pink-silver.jpg';
import Pic3 from '../../../images/flowers-table-pink-roses-decorations.jpg';

/**
* RecentBlogCard component definition and export
*/

export const RecentBlogCard = (props) => {

    /**
    * Methods
    */

    const loadImage = () => {
        switch(props.image){
            case 'Pic1':
                return Pic1;
            case 'Pic2':
                return Pic2;
            case 'Pic3':
                return Pic3;
        }
    }

    /**
    * Markup
    */

    return(
        <div className="recent-blog-card">
            <div className="recent-blog-card-image">
                <img src={loadImage(props.image)}/>
            </div>
            <div className="recent-blog-card-wrapper1">
                <div 
                    className="recent-blog-card-header" 
                    onClick={props.onClick}
                >
                    {props.shortInfo}
                </div>
                <div className="recent-blog-card-wrapper2">
                    <div className="recent-blog-card-info">
                        <FontAwesomeIcon icon={faCalendarAlt} size="sm" className="icon-caledar"/>
                        <div className="recent-blog-card-info-text">
                            {props.creationDate}
                        </div>
                    </div>
                    <div className="recent-blog-card-info">
                        <FontAwesomeIcon icon={faUser} size="sm" className="icon-user"/>
                        <div className="recent-blog-card-info-text">
                            {props.author}
                        </div>
                    </div>
                    <div className="recent-blog-card-info">
                        <FontAwesomeIcon icon={faCommentAlt} size="sm" className="icon-comment"/>
                        <div className="recent-blog-card-info-text">
                            {props.numberOfComments}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(RecentBlogCard);
 