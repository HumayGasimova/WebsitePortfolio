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

/**
* Styles
*/

import './portfolio.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Pagination from '../../SmallParts/Pagination/pagination';

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
* Constants
*/

import {
    portfolioArray
} from '../../../constants/portfolio';

/**
* Portfolio component definition and export
*/

export const Portfolio = (props) => {

    const [slower, setSlower] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        let portfolioProjectsToShow = [...portfolioArray].slice(0, 3);
        props.initPortfolio(portfolioProjectsToShow);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const viewPortfolioButtonOnClick = (id) => {
        props.history.push(`/portfolioSingleId:${id}`, {id});
    }

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

    const renderPortfolioPage = () => {
        return(
            <>{
                props.portfolio.map((el,i)=>{
                    if(el.id % 2){
                        return(
                            <div key={i} className="portfolio-page-all-template-middle">
                                <div className="portfolio-page-all-description-middle">
                                    <div className="portfolio-page-all-description-name">APPLICATION</div>
                                    <div className="portfolio-page-all-description-header">Lorem ipsum dolor sit amet.</div>
                                    <div className="portfolio-page-all-description-text"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <Button 
                                        className="portfolio-description-button-middle"
                                        text={"View Portfolio"}
                                        onClick={() => viewPortfolioButtonOnClick(el.id)}
                                    />
                                </div>
                                <div className="portfolio-page-all-image-with-odd-id">
                                    <img src={loadImage(el.image)}/>
                                </div>
                            </div>
                        )
                    }else{
                        return(
                            <div key={i} className="portfolio-page-all-template">
                                <div className="portfolio-page-all-image-with-even-id">
                                    <img src={loadImage(el.image)}/>
                                </div>
                                <div className="portfolio-page-all-description">
                                    <div className="portfolio-page-all-description-name">ILLUSTRATION</div>
                                    <div className="portfolio-page-all-description-header">Lorem ipsum dolor sit amet.</div>
                                    <div className="portfolio-page-all-description-text"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. 
                                    </div>
                                    <Button 
                                        className="portfolio-description-button"
                                        text={"View Portfolio"}
                                        onClick={() => viewPortfolioButtonOnClick(el.id)}
                                    />
                                </div>
                            </div>
                        )
                    }
            })}</>
        )
    }
   
    const renderPortfolio = () => {
        return(
            <>   
                <div className={`${props.className}-template`}>
                    <div 
                        className={`${props.className}-image-first`} 
                        style={props.className === "portfolio" ? {transform: `translate(0px, -${slower}px)`} : null}
                    >
                        <img src={Pic1}/>
                    </div>
                    <div className={`${props.className}-description`}>
                        <div className={`${props.className}-description-name`}>ILLUSTRATION</div>
                        <div className={`${props.className}-description-header`}>Lorem ipsum dolor sit amet.</div>
                        <div className={`${props.className}-description-text`}> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. 
                        </div>
                        <Button 
                            className="portfolio-description-button"
                            text={"View Portfolio"}
                            onClick={() => viewPortfolioButtonOnClick(1)}
                        />
                    </div>
                </div>
                <div className="portfolio-template-middle">
                    <div className="portfolio-description-middle">
                        <div className="portfolio-description-name">APPLICATION</div>
                        <div className="portfolio-description-header">Lorem ipsum dolor sit amet.</div>
                        <div className="portfolio-description-text"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. 
                        </div>
                        <Button 
                            className="portfolio-description-button-middle"
                            text={"View Portfolio"}
                            onClick={() => viewPortfolioButtonOnClick(2)}
                        />
                    </div>
                    <div 
                        className="portfolio-image-second" 
                        style={{transform: `translate(0px, -${slower}px)`}}
                    >
                        <img src={Pic2}/>
                    </div>
                </div>
                <div className="portfolio-template">
                    <div 
                        className="portfolio-image-third"
                        style={{transform: `translate(0px, -${slower}px)`}}
                    >
                        <img src={Pic3}/>
                    </div>
                    <div className="portfolio-description">
                        <div className="portfolio-description-name">WEB DESIGN</div>
                        <div className="portfolio-description-header">Lorem ipsum dolor sit amet.</div>
                        <div className="portfolio-description-text"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. 
                        </div>
                        <Button 
                            className="portfolio-description-button"
                            text={"View Portfolio"}
                            onClick={() => viewPortfolioButtonOnClick(3)}
                        />
                    </div>
                </div>
            </>
        )
    }

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        // console.log(scrollHeight)
        setSlower(scrollHeight/2);
    }

    /**
    * Markup
    */

    return(
        <div className={`${props.className}`} id="portfolio">
            <div className={`${props.className}-paragraph`}>
                <div className={`${props.className}-text-line1`}>WORKS</div>
                <div className={`${props.className}-text-line2`}>View our works below to see our design and way of development.</div>
                <div className={`${props.className}-text-line3`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
           {props.portfolioPage ? renderPortfolioPage() : renderPortfolio()}
               {props.portfolioPage ? 
               <Pagination 
                    page="portfolioPage"
               /> : null}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            portfolio: Selectors.getPortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            initPortfolio: bindActionCreators(Actions.initPortfolio, dispatch),
        };
    }
)(withRouter(Portfolio));
 