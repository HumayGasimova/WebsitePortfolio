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
import BlogContent from '../../SmallParts/BlogContent/blogContent';
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

import './blogSinglePage.scss';

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

import {
    blogCards
} from '../../../constants/blogCards';

/**
* BlogSinglePage component definition and export
*/

export const BlogSinglePage = (props) => {

    /**
    * State
    */

    const [blogId, setBlogId] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        let portfolioProjectsToShow = portfolioArray.slice(0, 3);
        props.initPortfolio(portfolioProjectsToShow);
        
        let blogIdString = props.match.params.id;
        let blogId = blogIdString.slice(1, blogIdString.length);
        setBlogId(blogId);
        props.startInitBlogSingle(+blogId);

    }, [props.match.params.id]);

    const viewPortfolioParagraphOnClick = (id) => {
        props.history.push(`/portfolioSingleId:${id}`, {id});
    }

    const renderRecentBlog = () => {
        return(
            <div className="blog-single-page-recent-blog">
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
        <div className="blog-single-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={`Blog #${blogId}`}
            />
            <div className="blog-single-page-wrapper">
                <div className="blog-single-page-wrapper2">
                    <div className="blog-single-page-guide">
                        <div className="blog-single-page-guide-paragraph">Recent Portfolio</div>
                        {renderRecentBlog()}
                        <div className="blog-single-page-guide-paragraph">Paragraph</div>
                        <div className="blog-single-page-guide-text">
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
                    <div className="blog-single-page-wrapper3">
                        <BlogContent
                            image={props.singleBlog !== {} ? props.singleBlog.image : null}
                            paragraphs={props.singleBlog !== {} ? props.singleBlog.paragraphs : null}
                        />
                        {/* <PortfolioComments
                            singlePortfolio={props.singlePortfolio !== {} ? props.singlePortfolio : null}
                        /> */}
                    </div>
                </div>
                <Pagination 
                    page="blogSinglePage"
                />
            </div> 
           <Footer/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            singleBlog: Selectors.getSingleBlogState(state),
            portfolio: Selectors.getPortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            startInitBlogSingle: bindActionCreators(Actions.startInitBlogSingle, dispatch),
            initPortfolio: bindActionCreators(Actions.initPortfolio, dispatch),
        };
    }
)(withRouter(BlogSinglePage));
 