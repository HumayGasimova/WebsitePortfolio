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

/**
* Styles
*/

import './portfolioContent.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Spinner from '../../../library/Spinner/spinner';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import Pic1 from '../../../images/coffee-cafe-table-food.jpg';
import Pic2 from '../../../images/notebook-laptop-camera-diary-pink-silver.jpg';
import Pic3 from '../../../images/flowers-table-pink-roses-decorations.jpg';
import Pic4 from '../../../images/workspace-workplace-computer-macbook.jpg';
import Pic5 from '../../../images/volleyball-2639700_1280.jpg';
import Pic6 from '../../../images/research-3691930_960_720.jpg';
import Pic7 from '../../../images/book-page-on-black-table.jpg';
import Pic8 from '../../../images/mathematics-formula-smartphone-mobile-phone.jpg';
import Pic9 from '../../../images/headphones-2591890_960_720.jpg';
import Pic10 from '../../../images/grey-sport-shoes-sneakers-thumbnail.jpg';
import Pic11 from '../../../images/education-4611289_960_720.jpg';
import Pic12 from '../../../images/education-4382169_960_720.jpg';

/**
* PortfolioContent component definition and export
*/

export const PortfolioContent = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    const loadImage = (img) => {
        switch(img){
            case "Pic1":
                return Pic1;
            case "Pic2":
                return Pic2;
            case "Pic3":
                return Pic3;
            case "Pic4":
                return Pic4;
            case "Pic5":
                return Pic5;
            case "Pic6":
                return Pic6;
            case "Pic7":
                return Pic7;
            case "Pic8":
                return Pic8;
            case "Pic9":
                return Pic9;
            case "Pic10":
                return Pic10;
            case "Pic11":
                return Pic11;
            case "Pic12":
                return Pic12;
        }
    }

    const renderText = (textArray) => {
        return(
            <div className="portfolio-content-paragraph-text">
                {textArray.map((el, i) => {
                    return(
                        <div key={i}className="portfolio-content-paragraph-text-item">
                            {el}
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderParagraph = () => {
        return(
            <div className="portfolio-content-paragraphs">
                {props.paragraphs.map((el, i) => {
                    return(
                        <div key={i} className="portfolio-content-paragraph">
                            <div className="portfolio-content-paragraph-title">
                                {el.title}
                            </div>
                            {renderText(el.text)}
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <>{props.paragraphs ? 
            <div className="portfolio-content">
                <div className="portfolio-content-image">
                    <img src={loadImage(props.image)}/>
                </div>
                {renderParagraph()}
                <div className="portfolio-content-buttons">
                    <Button 
                        className="portfolio-content-button"
                        text={"See Demo"}
                    />
                    <Button 
                        className="portfolio-content-button"
                        text={"Download"}
                    />
                </div>
            </div> :
            <div className="portfolio-content-spinner"><Spinner/></div>
        }</>
    );
}

export default connect(
    (state) => {
        return {
            // singlePortfolio: Selectors.getSinglePortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            // startInitPortfolioSingle: bindActionCreators(Actions.startInitPortfolioSingle, dispatch),
        };
    }
)(PortfolioContent);
 