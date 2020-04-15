/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import {
    withRouter
} from 'react-router-dom';

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
    H4,
    H6,
    EH0
} from '../../../UtilityComponents';

/**
* Categories component definition and export
*/

export const Categories = (props) => {

    /**
    * Methods
    */

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
    }
)(withRouter(Categories));
 