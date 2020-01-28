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

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import RecentBlogCard from '../../SmallParts/RecentBlogCard/recentBlogCard';
import PortfolioContent from '../../SmallParts/PortfolioContent/portfolioContent';
import PortfolioComments from '../../SmallParts/PortfolioComments/portfolioComment';
import Pagination from '../../SmallParts/Pagination/pagination';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './portfolioSinglePage.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    portfolioArray
} from '../../../constants/portfolio';

/**
* PortfolioSinglePage component definition and export
*/

export const PortfolioSinglePage = (props) => {

    /**
    * State
    */

    const [portfolioId, setPortfolioId] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        let portfolioProjectsToShow = portfolioArray.slice(0, 3);
        props.initPortfolio(portfolioProjectsToShow);
        
        let portfolioIdString = props.match.params.id;
        let portfolioId = portfolioIdString.slice(1, portfolioIdString.length);
        setPortfolioId(portfolioId);
        props.startInitPortfolioSingle(+portfolioId);

    }, [props.match.params.id]);

    const viewPortfolioParagraphOnClick = (id) => {
        props.history.push(`/portfolioSingleId:${id}`, {id});
    }

    const renderRecentBlog = () => {
        return(
            <div>
               {props.portfolio.map((el, i) => {
                   return(
                       <RecentBlogCard
                            key={i}
                            image={el.image}
                            shortInfo={el.shortInfo}
                            creationDate={el.creationDate}
                            author={el.author}
                            numberOfComments={el.comments.sum}
                            onClick={() => viewPortfolioParagraphOnClick(el.id)}
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
        <div className="portfolio-single-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={`Portfolio #${portfolioId}`}
            />
            <div className="portfolio-single-page-wrapper">
                <div className="portfolio-single-page-wrapper2">
                    <div className="portfolio-single-page-wrapper3">
                        <PortfolioContent
                            image={props.singlePortfolio !== {} ? props.singlePortfolio.image : null}
                            paragraphs={props.singlePortfolio !== {} ? props.singlePortfolio.paragraphs : null}
                        />
                        <PortfolioComments
                            singlePortfolio={props.singlePortfolio !== {} ? props.singlePortfolio : null}
                        />
                    </div>
                    <div className="portfolio-single-page-guide">
                        <div className="portfolio-single-page-guide-paragraph">Recent Portfolio</div>
                        {renderRecentBlog()}
                        <div className="portfolio-single-page-guide-paragraph">Paragraph</div>
                        <div className="portfolio-single-page-guide-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, 
                            autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam 
                            vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                            Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis 
                            repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate 
                            quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque 
                            sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor 
                            minima esse vero ut ea, repudiandae suscipit!
                        </div>
                    </div>
                </div>
                <Pagination 
                    page="portfolioSinglePage"
                />
            </div>
           <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            singlePortfolio: Selectors.getSinglePortfolioState(state),
            portfolio: Selectors.getPortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            startInitPortfolioSingle: bindActionCreators(Actions.startInitPortfolioSingle, dispatch),
            initPortfolio: bindActionCreators(Actions.initPortfolio, dispatch),
        };
    }
)(withRouter(PortfolioSinglePage));
 