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
    withRouter
} from 'react-router-dom';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './pagination.scss';

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight  
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Pagination component definition and export
*/

export const Pagination = (props) => {

    /**
    * Methods
    */

    useEffect(() => {
        props.startInitPagination(props.page);
        if(props.page === "portfolioSinglePage"){
            props.choosePage(props.location.state.id);
        }
        props.disablePaginationArrowButton("arrowLeft");
        props.disablePaginationArrowButton("arrowRight");
    }, []);

    const paginationOnClick = (id) => {
        props.startChoosingPage(props.page, id);
    }

    const renderPageNumbers = () => {
        return(
            <div className="pagination-items">{
                props.paging.map((el,i)=>{
                return(
                    <div key={i} className={el.chosen ? "pagination-item-chosen-stage" : "pagination-item-stage"}>
                        <div
                            className={el.chosen ? "pagination-item-chosen pagination-item-chosen-bubble" : "pagination-item pagination-item-bubble"}
                            onClick={() => paginationOnClick(el.id)}
                        />
                         <div className={el.chosen ? "pagination-item-chosen-number" : "pagination-item-number"}>{i + 1}</div>
                    </div>
                )
            })}</div>
        )
    }

    const handleOnClickLeftArrow = (direction) => {
        switch(props.page){
            case 'portfolioPage':
                return props.startChoosingPortfolioPageOnArrowButton(direction);
            case 'portfolioSinglePage':
                return props.startChoosingPortfolioSinglePageOnArrowButton(direction);
            case 'blogPage':
                return props.startChoosingBlogCardsOnArrowButton(direction);
            case 'blogSinglePage':
                return props.startChoosingSingleBlogCardsOnArrowButton(direction);
        }
    }

    const handleOnClickRightArrow = (direction) => {
        switch(props.page){
            case 'portfolioPage':
                return props.startChoosingPortfolioPageOnArrowButton(direction);
            case 'portfolioSinglePage':
                return props.startChoosingPortfolioSinglePageOnArrowButton(direction);
            case 'blogPage':
                return props.startChoosingBlogCardsOnArrowButton(direction);
            case 'blogSinglePage':
                return props.startChoosingSingleBlogCardsOnArrowButton(direction);
        }
    }
  
    /**
    * Markup
    */

    return(
        <div className="pagination">
            <Button 
                className="pagination-button"
                onClick={() => handleOnClickLeftArrow("arrowLeft")}
                disabled={props.padinationArrowLeft}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="sm" className="icon-arrow-left"/>
            </Button> 
            {renderPageNumbers()}
            <Button 
                className="pagination-button"
                onClick={() => handleOnClickRightArrow("arrowRight")}
                disabled={props.padinationArrowRight}
            >
                <FontAwesomeIcon icon={faChevronRight} size="sm" className="icon-arrow-right"/>
            </Button>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            paging: Selectors.getPagingState(state),
            padinationArrowLeft: Selectors.getPadinationArrowLeftState(state),
            padinationArrowRight: Selectors.getPadinationArrowRightState(state),
        };
    },
    (dispatch) => {
        return {
            startInitPagination: bindActionCreators(Actions.startInitPagination, dispatch),
            startChoosingPage: bindActionCreators(Actions.startChoosingPage, dispatch),
            startChoosingPortfolioPageOnArrowButton: bindActionCreators(Actions.startChoosingPortfolioPageOnArrowButton, dispatch),
            startChoosingPortfolioSinglePageOnArrowButton: bindActionCreators(Actions.startChoosingPortfolioSinglePageOnArrowButton, dispatch),
            disablePaginationArrowButton: bindActionCreators(Actions.disablePaginationArrowButton, dispatch),
            choosePage: bindActionCreators(Actions.choosePage, dispatch),
            startChoosingBlogCardsOnArrowButton: bindActionCreators(Actions.startChoosingBlogCardsOnArrowButton, dispatch),
            startChoosingSingleBlogCardsOnArrowButton: bindActionCreators(Actions.startChoosingSingleBlogCardsOnArrowButton, dispatch),
        };
    }
)(withRouter(Pagination));
 