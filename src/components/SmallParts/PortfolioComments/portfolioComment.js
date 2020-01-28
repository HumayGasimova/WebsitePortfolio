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

import './portfolioComments.scss';

/**
* Icons
*/

import { 
    faCaretRight  
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Comment from '../../SmallParts/Comment/comment';
import LeaveComment from '../../SmallParts/LeaveComment/leaveComment';
import Spinner from '../../../library/Spinner/spinner';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';


/**
* PortfolioComments component definition and export
*/

export const PortfolioComments = (props) => {

    /**
    * Methods
    */

    const showInputField = (threadId, userId, thread) => {
        props.startShowingCommentInputArea(threadId, userId, thread);
    }

    const reply = (threadId, userId, thread) => (val) => {
        props.startAddingReply(val, threadId, userId, thread);
    }

    const renderReplies = (replyObj, threadNumber) => {
            return(
                <div className="portfolio-comments-reply">{replyObj.arrayOfReplies.map((el, i) => {
                    return(
                        <div key={i}>
                            <Comment
                                image={el.image}
                                fullName={el.fullName}
                                date={el.date}
                                comment={el.comment}
                                inputIsShown={el.inputIsShown}
                                onClick={() => showInputField(replyObj.threadId, el.id, `threadN${threadNumber}`)}
                                addComment={reply(replyObj.threadId, el.id, `threadN${threadNumber}`)}
                            />
                            {el.reply && el.reply.arrayOfReplies.length !== 0 ? renderReplies(el.reply, threadNumber + 1) : null}
                        </div>
                    )
                })}</div>
            )
    }

    const renderComments = () => {
        return(
            <div className="portfolio-comments-all">{props.singlePortfolio.comments.array.map((el, i) => {
                return(
                    <div  key={i} className="portfolio-comment">
                        <Comment 
                            image={el.image}
                            fullName={el.fullName}
                            date={el.date}
                            comment={el.comment}
                            inputIsShown={el.inputIsShown}
                            onClick={() => showInputField(0, el.id, "mainThread")}
                            addComment={reply(0, el.id, "mainThread")}
                        />
                        {el.reply && el.reply.arrayOfReplies.length !== 0 ? renderReplies(el.reply, 1) : null}
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
       <>{props.singlePortfolio.comments ? 
            <div className="portfolio-comments">
                <div className="portfolio-comments-total-number-of-comments">{props.singlePortfolio.comments.sum} Comments</div>
                {renderComments()}
                <LeaveComment/>
            </div> : 
            <div className="portfolio-comments-spinner"><Spinner/></div>
       }</> 
    );
}

export default connect(
    (state) => {
        return {
            // comments: Selectors.getSinglePortfolioState(state).comments,
        };
    },
    (dispatch) => {
        return {
            startAddingReply: bindActionCreators(Actions.startAddingReply, dispatch),
            startShowingCommentInputArea: bindActionCreators(Actions.startShowingCommentInputArea, dispatch),
        };
    }
)(PortfolioComments);
 