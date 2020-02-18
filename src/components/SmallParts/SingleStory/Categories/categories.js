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
    withRouter
} from 'react-router-dom';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    CSSTransition 
} from 'react-transition-group';

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

import './categories.scss';

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
    EH0,
    EH1,
    EH2,
    EH4,
    EW1,
    EW2,
    Line1,
    Line3
} from '../../../UtilityComponents';

/**
* Images
*/


/**
* Categories component definition and export
*/

export const Categories = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    useEffect(() => {
        // if(props.archievesMonths.length === 0){
        //     props.startInitArchieves();
        // }
    }, []);

    const categoriesOnClick = (path, obj) => {
        props.history.push(`/crypto-cafe/category/${path}`,{obj});
    }

    const renderCategories = () => {
        if(props.categories){
            return(
                <div className="categories-items">{props.categories.map((el, i) => {
                    return(
                       <div 
                            key={i} 
                            className="categories-item" 
                            onClick={() => categoriesOnClick(el.path, el)}
                        >
                            <H6 className="h6-jaldi">{el.category}</H6>
                       </div>
                    )
                })}</div>
            )
        }
    }

    /**
    * Markup
    */

    return(
        <div className="categories">
            <H4 className={"h4-white"}>CATEGORIES</H4>
            <EH0/>
            {renderCategories()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            categories: Selectors.getCategoriesState(state),
        };
    },
    (dispatch) => {
        return {
            // startInitArchieves: bindActionCreators(Actions.startInitArchieves, dispatch),
            // activateMenuItem: bindActionCreators(Actions.activateMenuItem, dispatch),
        };
    }
)(withRouter(Categories));
 